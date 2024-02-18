// Import the functions you need from the SDKs you need
import { loadProducts, data } from "search.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import {
  collection,
  addDoc,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFfnpciLIFXLtGMUKnnDzbenWsDvHyLTo",
  authDomain: "lmao-e7992.firebaseapp.com",
  databaseURL: "https://lmao-e7992-default-rtdb.firebaseio.com",  
  projectId: "lmao-e7992",
  storageBucket: "lmao-e7992.appspot.com",
  messagingSenderId: "128937804179",
  appId: "1:128937804179:web:e7650b9bc40e4f2ba0a866",
  measurementId: "G-8WFMXT6Z09",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const favover = document.querySelector("#mi");
favover.addEventListener("click", async () => {
  const img = document.querySelector("#img").value;
  const name_product = document.querySelector("#name_product").value;
  const docRef = await addDoc(collection(db, "final"), {
    img: img,
    name: name_product,
  });
  console.log("Document written with ID: ", docRef.id);
});
