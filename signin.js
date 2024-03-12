// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut 
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

const button = document.getElementById("button");
const login = document.getElementById("login");

button.addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      alert("Congratulations on successfully logged in");
      window.location.replace("index.html");
      // updateUI(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Login unsuccessfull, please retry in minute");
    });
});

//sign out
// const signOutButton = document.getElementById('signOutButton');
// signOutButton.addEventListener('click', () => {
//   auth.signOut()
//     .then(() => {
//       // Đăng xuất thành công
//       alert('Đăng xuất thành công');
//       // Cập nhật giao diện
//       updateUI(false);
//     })
//     .catch((error) => {
//       // Xử lý lỗi
//       console.error(error);
//       alert('Đã xảy ra lỗi khi đăng xuất, vui lòng thử lại sau.');
//     });
// });

// function updateUI(isLoggedIn) {
//   if (isLoggedIn) {
//     // Đã đăng nhập, hiển thị nút "Sign Out"
//     signOutButton.style.display = 'block';
//     // Ẩn nút "Login"
//     login.innerHTML = '';
//   } else {
//     // Chưa đăng nhập, ẩn nút "Sign Out"
//     signOutButton.style.display = 'none';
//     // Hiển thị nút "Login"
//     login.innerHTML = `<img src="http://cdn.onlinewebfonts.com/svg/img_124200.png" alt="" height="40px" width="40px"id="accountButton"><button id="signOutButton" class="sign-out-button" style="display: none;">Sign Out</button>`;
//   }
// }
