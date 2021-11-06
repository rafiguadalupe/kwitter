
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
function addRoom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update(
{
      purpose:"adding room name"
}      
);
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.HTML";
}




function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("room name- "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
