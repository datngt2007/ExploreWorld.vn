// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUx6RdCdwup3E4E7DOF67-z5yBo4xXwGw",
  authDomain: "travel-project-9bf13.firebaseapp.com",
  projectId: "travel-project-9bf13",
  storageBucket: "travel-project-9bf13.appspot.com",
  messagingSenderId: "1042438939416",
  appId: "1:1042438939416:web:3248720da25529a8e0f46d",
  measurementId: "G-ENSPQ2B6EX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const button1 = document.getElementById("button1");

button1.addEventListener("click", () => {
  const email1 = document.getElementById("email1").value;
  const password1 = document.getElementById("password1").value;

  createUserWithEmailAndPassword(auth, email1, password1)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Congratulations on successfully registering");
      window.location.replace("signin.html");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if ((email1 == "") & (password1 == "")) {
        alert("please fill full you information");
      } else {
        if (password1 <= 7) {
          alert("a password is too short please fill more than 7");
        }
      }
    });
});
