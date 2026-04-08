// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCF8hpkEqKR31nnT9FZ58RKW5BzN4P2viY",
    authDomain: "secretspot-ba62a.firebaseapp.com",
    projectId: "secretspot-ba62a",
    storageBucket: "secretspot-ba62a.firebasestorage.app",
    messagingSenderId: "434669647466",
    appId: "1:434669647466:web:9e01720e2e5dddf7e2fc13",
    measurementId: "G-9YKW7NGSHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app)
const analytics = getAnalytics(app);