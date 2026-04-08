import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
// This requires FIREBASE_SERVICE_ACCOUNT to be set in your environment as a stringified JSON
// or we can use Application Default Credentials if running on GCP.
// For local development, we expect process.env.FIREBASE_SERVICE_ACCOUNT to contain the JSON.

const initFirebaseAdmin = () => {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  try {
    const serviceAccountStr = process.env.FIREBASE_SERVICE_ACCOUNT;
    
    if (serviceAccountStr && serviceAccountStr !== "{}" && serviceAccountStr.length > 10) {
      const serviceAccount = JSON.parse(serviceAccountStr);
      return admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
    } else {
      console.warn("FIREBASE_SERVICE_ACCOUNT is empty or not configured. Notification sending will be skipped.");
      return null;
    }
  } catch (error: any) {
    console.error("Firebase Admin Initialization Error. Did you wrap your JSON in single quotes inside .env?");
    return null;
  }
};

export const firebaseAdmin = initFirebaseAdmin();
export const messagingServer = firebaseAdmin ? admin.messaging(firebaseAdmin) : null;
