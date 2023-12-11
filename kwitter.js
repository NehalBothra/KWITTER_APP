const firebaseConfig = {
    apiKey: "AIzaSyCud__1wFR2xECUHAgIQ2bFdOysO58p-TU",
    authDomain: "kwitterapp-50886.firebaseapp.com",
    databaseURL: "https://kwitterapp-50886-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-50886",
    storageBucket: "kwitterapp-50886.appspot.com",
    messagingSenderId: "1002019918055",
    appId: "1:1002019918055:web:cc63686c08114f0b4b5242"
  };
     // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
function addUser(){

    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}