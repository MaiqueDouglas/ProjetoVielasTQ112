import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAGhK0Db4t7zDJECj6stwl1S2UxFBdXeOc",
    authDomain: "projetovielas1.firebaseapp.com",
    projectId: "projetovielas1",
    storageBucket: "projetovielas1.appspot.com",
    messagingSenderId: "834498671182",
    appId: "1:834498671182:web:874254aa4e8a7086e6891f",
    measurementId: "G-V7X5D68870"
};

// Inicializar Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, collection, addDoc, auth };