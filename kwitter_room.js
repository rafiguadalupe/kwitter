
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCRy8q1GUU_xeyIs6yhchBYIxLoNqVs5C4",
      authDomain: "kwitter-49ab2.firebaseapp.com",
      databaseURL: "https://kwitter-49ab2-default-rtdb.firebaseio.com",
      projectId: "kwitter-49ab2",
      storageBucket: "kwitter-49ab2.appspot.com",
      messagingSenderId: "742615427968",
      appId: "1:742615427968:web:b7917ccd70d6d770e46f65"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";







function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
