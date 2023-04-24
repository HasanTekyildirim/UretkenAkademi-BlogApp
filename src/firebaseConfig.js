import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import{getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWbKsSY_B59VhCHOIHxKpBXtIOk9rqj44",
  authDomain: "blogapp-d10b7.firebaseapp.com",
  projectId: "blogapp-d10b7",
  storageBucket: "blogapp-d10b7.appspot.com",
  messagingSenderId: "340259374411",
  appId: "1:340259374411:web:0d03a9034ddc7ef419d4ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();