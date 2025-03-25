import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwe_xxKpsKDCteEO8VsfFqx_NpQsOd1N8",
  authDomain: "userlogins-afbe2.firebaseapp.com",
  projectId: "userlogins-afbe2",
  storageBucket: "userlogins-afbe2.firebasestorage.app",
  messagingSenderId: "277324386375",
  appId: "1:277324386375:web:4115536ae37567fc342162",
  measurementId: "G-0260JJM9D9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const submit = document.getElementById("Submit");

submit.addEventListener("click", function(e){
  e.preventDefault();

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) =>{
    const user = userCredential.user;
    alert("Registering....")
    window.location.href = "login.html";
  })

  .catch((error) =>{
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  })

})

