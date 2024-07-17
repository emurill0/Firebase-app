import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

// Firebase configuracion
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID    
};

console.log("Valor de configuracion", firebaseConfig);

// Firebase
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

export { database,storage,app };