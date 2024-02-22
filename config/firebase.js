// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqHoDB3wCmsJDodqza7meTkd4LDg0u3uw",
  authDomain: "react-native-login-d9bb8.firebaseapp.com",
  projectId: "react-native-login-d9bb8",
  storageBucket: "react-native-login-d9bb8.appspot.com",
  messagingSenderId: "839353745720",
  appId: "1:839353745720:web:421b0207ffb2483f1e41cd",
  measurementId: "G-XGTEGCCC0B"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize Firebase Auth for that app immediately
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

const analytics = getAnalytics(app);

export const auth = getAuth(app);

// export { app, auth, getApp, getAuth };

