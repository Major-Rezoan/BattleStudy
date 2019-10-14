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

function handleSignUp() {
  var email = document.getElementById('inputUserEmail').value;
  var password = document.getElementById('inputUserPassword').value;
  var cfmpassword = document.getElementById('inputConfirmPassword').value;
  if (email.length < 2) {
    alert('Please enter a valid email address.');
    return;
  }
  if (password.length < 4) {
    alert('Password length must be atleast six characters.');
    return;
  }
  if (password != cfmpassword) {
    alert('Password does not match.');
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
    console.log(error);
  });
  document.querySelector('.alert').style.display = 'block';
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  document.getElementById('signupForm').reset();

  setTimeout(function(){
    document.location.href="index.html";
  },3040);
};

const signUpForm = document.querySelector("#signupForm");
if (signUpForm != null) {
  signUpForm.addEventListener("submit", event => {
    event.preventDefault();

    const email = signUpForm["inputUserEmail"].value;
    const password = signUpForm["inputUserPassword"].value;

    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
      signUpForm.reset();
    });
  });
}
