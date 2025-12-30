// firebase-config.js

// 1. Import functions from Google's CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. Your Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE", // Replaced for security
    authDomain: "waste-management-proj-149e0.firebaseapp.com",
    projectId: "waste-management-proj-149e0",
    storageBucket: "waste-management-proj-149e0.firebasestorage.app",
    messagingSenderId: "458437538288",
    appId: "1:458437538288:web:1cf2005be98e44e124ad35",
    measurementId: "G-W9DFLL8150"
};

// 3. Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 4. Export services so other files can use them
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;