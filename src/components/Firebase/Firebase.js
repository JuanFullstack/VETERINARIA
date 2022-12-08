import { initializeApp } from "firebase/app";
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
import { getAuth } from "firebase/auth";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyA2E9uFsRSbq0kZr5IL52ziPKUZbX2Jdfo",
  authDomain: "protecto1-371014.firebaseapp.com",
  projectId: "protecto1-371014",
  storageBucket: "protecto1-371014.appspot.com",
  messagingSenderId: "228405762147",
  appId: "1:228405762147:web:38b92d04723e4149124056",
  measurementId: "G-EZJFHC9NYC"
};

 // VARIABLES BASCICAS 
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();




