// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvK55CjumdleG8Zs-P4MAY2H6c16ZWSmk",
  authDomain: "hacknight-e2c93.firebaseapp.com",
  projectId: "hacknight-e2c93",
  storageBucket: "hacknight-e2c93.appspot.com",
  messagingSenderId: "253217115032",
  appId: "1:253217115032:web:7f8f2e09f77d9a359039ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app)