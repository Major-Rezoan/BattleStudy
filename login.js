var firebaseConfig = {
  apiKey: "AIzaSyAfX-9X_XK4m9bJ42i7qhiL0hdtJ0rVVfo",
  authDomain: "login-534ed.firebaseapp.com",
  databaseURL: "https://login-534ed.firebaseio.com",
  projectId: "login-534ed",
  storageBucket: "",
  messagingSenderId: "618155063402",
  appId: "1:618155063402:web:f04c1dc691b899592ef213"
};

firebase.initializeApp(firebaseConfig);

function login(){
	var UserEmail = document.getElementById("inputEmail").value;
	var UserPassword = document.getElementById("inputPassword").value;
	firebase.auth().signInWithEmailAndPassword(UserEmail, UserPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
	window.alert("Error: " + errorMessage);
});

firebase.auth().onAuthStateChanged(function(user){
	if (UserEmail == "rezoan@gmail.com") {
    document.location.href="adminhome.html";
	}
  else if(user){
    {
      document.location.href="home.html";
    }
  }
	else {
		document.getElementById("coverpage").style.display="block";
		document.getElementById("signin-form").style.display="none";
		document.getElementById("signup-form").style.display="none";
	}
});

}

function logout(){
  window.alert("logging you out");
  firebase.auth().signOut();
  document.location.href="index.html";
}
