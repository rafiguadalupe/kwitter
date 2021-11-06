// ADD YOUR FIREBASE LINKS 
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8voAa1jrgV-XzKJazBoejbC7jJkcwYBg",
    authDomain: "kwiiiiiiiiiiiii.firebaseapp.com",
    databaseURL: "https://kwiiiiiiiiiiiii-default-rtdb.firebaseio.com",
    projectId: "kwiiiiiiiiiiiii",
    storageBucket: "kwiiiiiiiiiiiii.appspot.com",
    messagingSenderId: "664371938808",
    appId: "1:664371938808:web:563f2a40330908658c820d"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function addUser() { user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });
 }