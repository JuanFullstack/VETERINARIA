//import firebase from "firebase/compat/app"
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

/* Importamos las funciones propias de la base de datos como getFirestore etc... */
import { getFirestore } from "@firebase/firestore";
/*
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
*/
import { getAuth } from "firebase/auth";


/*
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";
*/

//CONFIGURACION JUAN

const firebaseConfig = {
  apiKey: "AIzaSyAWxv2QAQR7_Lx8v3VyRFkM10InFJJnn5E",
  authDomain: "fir-p1-51846.firebaseapp.com",
  projectId: "fir-p1-51846",
  storageBucket: "fir-p1-51846.appspot.com",
  messagingSenderId: "289222028009",
  appId: "1:289222028009:web:835ccdc1b1ab6f26791e78",
  measurementId: "G-TC2M3BLEKE",
  clientId :"790207131839-jeiipu6sujumqtk8j7m51f05csjgp3qv.apps.googleusercontent.com"
};


// VARIABLES BASCICAS
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//export const storage = getStorage(app);

