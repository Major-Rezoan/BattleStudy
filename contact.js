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


// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form function here
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = document.getElementById('name').value; //getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();

  //redirect to home page
  setTimeout(function(){
    document.location.href="home.html";
  },3040);


}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
