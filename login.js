function showSignup(){
    document.getElementById("signUp").style.display = "flex";
    document.getElementById("login").style.display = "none";
    document.getElementById("btns2").style.backgroundColor = "white";
    document.getElementById("btns1").style.backgroundColor = "#cdb4db";
       
}
function showLogin(){
    document.getElementById("signUp").style.display = "none";
    document.getElementById("login").style.display = "flex";
    document.getElementById("btns1").style.backgroundColor = "white";
    document.getElementById("btns2").style.backgroundColor = "#cdb4db";
    
}

 var attempt = 3; // Variable to count number of attempts.
 // Below function Executes on click of login button.
 function validate(){
 var username = document.getElementById("username").value;
 var password = document.getElementById("password").value;
 if ( username == "Formget" && password == "formget#123"){
 alert("Login Successful");
 window.location = "home.html"; // Redirecting to other page.
 
 return false;
 }
 else{
 attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
 // Disabling fields after 3 attempts.
 if( attempt == 0){
 document.getElementById("username").disabled = true;
 document.getElementById("password").disabled = true;
 document.getElementById("submit").disabled = true;
 return false;
 }
 }
 }
