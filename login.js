import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCwe_xxKpsKDCteEO8VsfFqx_NpQsOd1N8",
    authDomain: "userlogins-afbe2.firebaseapp.com",
    projectId: "userlogins-afbe2",
    storageBucket: "userlogins-afbe2.firebasestorage.app",
    messagingSenderId: "277324386375",
    appId: "1:277324386375:web:4115536ae37567fc342162",
    measurementId: "G-0260JJM9D9"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

const submit = document.getElementById("submit");

submit.addEventListener("click", function(e){
    e.preventDefault();

    const email = document.getElementById("loginEmail");
    const password = document.getElementById("loginPassword");

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) =>{
        const user = userCredential.user;
        alert("logging in...");
        window.location.href = "kays.html";
    })

    .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
})




