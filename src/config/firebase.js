import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuracion
const firebaseConfig = {
  apiKey: "AIzaSyBBYRwKH_qRO6Oim_LC-BpxsXv0eejh16Q",
  authDomain: "practica-firebase-20220021.firebaseapp.com",
  projectId: "practica-firebase-20220021",
  storageBucket: "practica-firebase-20220021.appspot.com",
  messagingSenderId: "603970761082",
  appId: "1:603970761082:web:3793b2bf53ab102cffe6c3"
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

export { database, storage, app, auth };