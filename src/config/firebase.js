import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuracion
const firebaseConfig = { 
    apiKey: "AIzaSyB0xRorfML5yhaw7r_G56oSsxODHo1GQhU",
    authDomain: "practica-firebase-20220151.firebaseapp.com",
    projectId: "practica-firebase-20220151",
    storageBucket: "practica-firebase-20220151.appspot.com",
    messagingSenderId: "794363095726",
    appId: "1:794363095726:web:d7962b58df869d92799b3f"
  };


console.log("Valor de configuracion", firebaseConfig);

// Firebase hola

const app = initializeApp(firebaseConfig);
if (app) {
  console.log('Firebase iniciada correctamente');
} else {
  console.log('Firebase iniciada incorrectamente');
}

const database = getFirestore(app);
if (database) {
  console.log('Firestore iniciada correctamente');
} else {
  console.log('Firestore iniciada incorrectamente');
}

const storage = getStorage(app);

if (storage) {
  console.log('storage iniciada correctamente');
} else {
  console.log('storage iniciada incorrectamente');
}

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { database,storage,app,auth };