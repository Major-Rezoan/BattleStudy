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

  var rootRef = firebase.database().ref().child("comments");

  rootRef.on("child_added", snap => {
    var localname = snap.child("name").val();
    var name = "<span style='color:#0B4A92;font-size:1.3rem'>"+ localname +"</span>";
    var message = snap.child("message").val();
    var localdate = snap.child("date").val();
    var date = "<span style='color:#B40505'>"+ localdate +"</span>";
    var localmonth = snap.child("month").val();
    var month = "<span style='color:#049A0A;font-size:1.1rem'>"+ localmonth +"</span>";
    var year = snap.child("year").val();

    $("#table_body").append("<tr><td> On " + date + " " + month + " " + year + ", " + name + " commented: </td><td>" + message + "</td><td></td></tr>")
  });

  var messagesRef = firebase.database().ref('comments');

  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);

  // Submit form function here
  function submitForm(e){
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var message = getInputVal('message');
    var today = new Date();
    var date = today.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var month = monthNames[today.getMonth()];
    var year = today.getFullYear();


    // Save message
    saveMessage(name, message, date, month, year);
    // Clear form
    document.getElementById('contactForm').reset();
  }

  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
  function saveMessage(name, message, date, month, year){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      date: date,
      month: month,
      year: year,
      message: message
    });
  }
