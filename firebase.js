import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCPVmjYGZgx17XZEB2Qsl_POpW6Vtaa_hE",
    authDomain: "foodordering-696a3.firebaseapp.com",
    projectId: "foodordering-696a3",
    storageBucket: "foodordering-696a3.appspot.com",
    messagingSenderId: "508590517991",
    appId: "1:508590517991:web:3ce5dcffab17cbb4a4bc42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider(app)

export default app