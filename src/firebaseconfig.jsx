// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";

// Your Firebase config here
const firebaseConfig = {
    apiKey: "AIzaSyC7otX2spjggC4acdLHQ661tlP7bGdIRiU",
    authDomain: "stripe-backend-2b07b.firebaseapp.com",
    databaseURL: "https://stripe-backend-2b07b-default-rtdb.firebaseio.com",
    projectId: "stripe-backend-2b07b",
    storageBucket: "stripe-backend-2b07b.firebasestorage.app",
    messagingSenderId: "564511324214",
    appId: "1:564511324214:web:89ffd2f136a80de3218097",
    measurementId: "G-TRSL3TQ3YP"
};

// Initialize Firebase
 const cong = initializeApp(firebaseConfig);

  export default cong;
// Now you can use Firebase services in your React app!