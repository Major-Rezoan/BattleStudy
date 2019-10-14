var check = function() {
  if (document.getElementById('inputUserPassword').value ==
    document.getElementById('inputConfirmPassword').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}

function showSignin(){
	document.getElementById("coverpage").style.display="none";
	document.getElementById("signin-form").style.display="block";
	document.getElementById("signup-form").style.display="none";

}

function showSignUp(){
	document.getElementById("coverpage").style.display="none";
	document.getElementById("signin-form").style.display="none";
	document.getElementById("signup-form").style.display="block";
}

function showCoverpage(){
	document.getElementById("coverpage").style.display="block";
	document.getElementById("signin-form").style.display="none";
	document.getElementById("signup-form").style.display="none";
}
