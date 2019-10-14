// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA709oMbj20_y8KFJZWtmCQ-22Qi6MJC4Y",
    authDomain: "messages-93146.firebaseapp.com",
    databaseURL: "https://messages-93146.firebaseio.com",
    projectId: "messages-93146",
    storageBucket: "",
    messagingSenderId: "1071339228677",
    appId: "1:1071339228677:web:85a23f7f6cae5bba45d66c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var rootRef = firebase.database().ref().child("messages");

  rootRef.on("child_added", snap => {
    var name = snap.child("name").val();
    var email = snap.child("email").val();
    var message = snap.child("message").val();
    var company = snap.child("company").val();
    var phone = snap.child("phone").val();

    $("#table_body").append("<tr><td>" + name + "</td><td>" + email + "</td><td>" + company + "</td><td>" + phone + "</td><td>" + message + "</td><td><button>Remove</button></td></tr>")
  })
