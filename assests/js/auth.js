  // Initialize Firebase
var config = {
	apiKey: "AIzaSyBWo8oBh1AQjXPMBqqqqdypjbly2tmrsa4",
	authDomain: "lendi-library.firebaseapp.com",
	databaseURL: "https://lendi-library.firebaseio.com",
	projectId: "lendi-library",
	storageBucket: "lendi-library.appspot.com",
	messagingSenderId: "402689968173"
};
firebase.initializeApp(config);
function toggleSignUp(){
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
	  var errorCode = error.code;
	  var errorMessage = error.message;
	});
}
$(document).ready(function(){
   $("#cpassword").blur(function () {
 		var password = $("password").val();
 		var cpassword = $("cpassword").val();
 		if(password === cpassword)
 			alert("Passwords do not match!");
   });
});
