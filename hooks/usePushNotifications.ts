import { useState, useEffect } from 'react';
import { getMessaging, getToken, onMessage, isSupported } from 'firebase/messaging';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { toast } from 'sonner';

// Reuse the config from lib/firbasesdk.ts
const firebaseConfig = {
    apiKey: "AIzaSyCF8hpkEqKR31nnT9FZ58RKW5BzN4P2viY",
    authDomain: "secretspot-ba62a.firebaseapp.com",
    projectId: "secretspot-ba62a",
    storageBucket: "secretspot-ba62a.firebasestorage.app",
    messagingSenderId: "434669647466",
    appId: "1:434669647466:web:9e01720e2e5dddf7e2fc13",
    measurementId: "G-9YKW7NGSHD"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const usePushNotifications = () => {
    const [isSupportedBrowser, setIsSupportedBrowser] = useState(false);
    const [permission, setPermission] = useState<NotificationPermission>('default');
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        isSupported().then((supported) => {
            setIsSupportedBrowser(supported);
            if (supported) {
                setPermission(Notification.permission);
            }
        });
    }, []);

    useEffect(() => {
        if (!isSupportedBrowser || permission !== 'granted') return;

        const messaging = getMessaging(app);
        const unsubscribe = onMessage(messaging, (payload) => {
            console.log('Message received in foreground.', payload);
            toast.info(payload.notification?.title || "New Notification", {
                description: payload.notification?.body,
                action: payload.webpush?.fcmOptions?.link ? {
                    label: "View",
                    onClick: () => window.open(payload.webpush?.fcmOptions?.link, '_blank')
                } : undefined
            });
        });

        return () => {
            unsubscribe();
        };
    }, [permission, isSupportedBrowser]);

    const requestPermissionAndSubscribe = async () => {
        if (!isSupportedBrowser) {
            toast.error("Push notifications are not supported in this browser.");
            return;
        }

        try {
            const currentPermission = await Notification.requestPermission();
            setPermission(currentPermission);

            if (currentPermission === 'granted') {
                const messaging = getMessaging(app);
                const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;
                
                const currentToken = await getToken(messaging, { vapidKey });
                
                if (currentToken) {
                    setToken(currentToken);
                    // Send this token to the Payload CMS backend
                    await fetch('/api/push-subscribers', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ token: currentToken }),
                    });
                    
                    toast.success("Successfully subscribed to notifications!");
                } else {
                    toast.error("No registration token available. Request permission to generate one.");
                }
            } else {
                toast.warning("Notification permission denied.");
            }
        } catch (error) {
            console.error('An error occurred while retrieving token. ', error);
            toast.error("Failed to subscribe to notifications.");
        }
    };

    return { requestPermissionAndSubscribe, permission, isSupportedBrowser, token };
};
