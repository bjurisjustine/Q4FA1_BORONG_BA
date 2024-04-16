function toValid(element) {
    element.style.borderColor = "green";
  }
  
  function chValue() {
    var inputElements = document.getElementsByTagName("input");
    for (var i = 0; i < inputElements.length; i++) {
      if (inputElements[i].value == "") {
        inputElements[i].style.borderColor = "red";
      } else {
        inputElements[i].style.borderColor = "green";
      }
    }
  }

function inpInterests(){
    var inpInterest = document.getElementById("interests").value.length;

    if(inpInterest==""){
        document.getElementById("int").style.borderColor = "red";
        document.getElementById("error").innerHTML = "Please fill in this field.";
    }
    else{
        document.getElementById("int").style.borderColor = "green";
        document.getElementById("error").innerHTML = "";
    }
}

function finalOutput() {
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var interests = document.getElementById("interests").value;
    var gender = document.getElementById("gender").value;
  
    document.getElementById("nameoutput").innerHTML = "Name: " + name;
    document.getElementById("unameoutput").innerHTML = "Username: " + username;
    document.getElementById("passwordoutput").innerHTML = "Password: " + password;
    document.getElementById("emailoutput").innerHTML = "Email: " + email;
    document.getElementById("interestsoutput").innerHTML = "Interests: " + interests;
    document.getElementById("genderoutput").innerHTML = "Gender: " + gender;
}
    function resOutp() {
        var display = document.getElementById("printout");
        display.innerHTML = ' ';
    }

    document.getElementById("fillupForm").addEventListener("submit", function(event){
        event.preventDefault();
        finalOutput();

      }); 

 