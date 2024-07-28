// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3hGoHA8LGK4U3TCNG3m9KWWIqBsTmJvo",
  authDomain: "log-auth-c4acd.firebaseapp.com",
  projectId: "log-auth-c4acd",
  storageBucket: "log-auth-c4acd.appspot.com",
  messagingSenderId: "993636763716",
  appId: "1:993636763716:web:326697f293a3284e9bd411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);