
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
  

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ 
            purpose : "adding room name" 
      });
      localStorage.setItem("room_name, room_name");
      window.location = "Kwitter_page.html";
}     

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " +Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location.replace("Kwitter_page.html");
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location.replace("index.html");
      }
      