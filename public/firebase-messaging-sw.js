// import firebase scripts
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

const firebaseConfig = {
    apiKey: "AIzaSyCF8hpkEqKR31nnT9FZ58RKW5BzN4P2viY",
    authDomain: "secretspot-ba62a.firebaseapp.com",
    projectId: "secretspot-ba62a",
    storageBucket: "secretspot-ba62a.firebasestorage.app",
    messagingSenderId: "434669647466",
    appId: "1:434669647466:web:9e01720e2e5dddf7e2fc13",
    measurementId: "G-9YKW7NGSHD"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/favicon.ico', // Update this if you have a specific icon for push notifications
    data: payload.webpush?.fcmOptions?.link ? { url: payload.webpush.fcmOptions.link } : {}
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Click event handler for notifications
self.addEventListener('notificationclick', function(event) {
  console.log('[firebase-messaging-sw.js] Notification click Received.', event);
  event.notification.close();
  // Open the url if provided
  if (event.notification.data && event.notification.data.url) {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  }
});
