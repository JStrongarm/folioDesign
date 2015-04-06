var navbg = document.getElementById("navigation");
var modal = document.getElementById("modal");
var contact = document.getElementById("contact");
	// input elements
	var firstName = document.getElementById("firstName");
	var lastName = document.getElementById("lastName");
	var email = document.getElementById("email");
	var comments = document.getElementById("comments");
	// Input labels
	var firstName_label = document.getElementById("firstName-label");
	var lastName_label = document.getElementById("lastName-label");
	var email_label = document.getElementById("email-label");
	var comments_label = document.getElementById("comments-label");

// TOP NAVIGATION FUNCTION
window.addEventListener("scroll", navChange);

function navChange(){
	if(window.pageYOffset >= 250){
		navbg.className = "navScrolled";
	}else{
		navbg.className = "";
	}
}

// CONTACT FORM VALIDATION
firstName.addEventListener("keyup", formValid);
lastName.addEventListener("keyup", formValid);
comments.addEventListener("keyup", formValid);
email.addEventListener("keyup", emailValid);

function formValid(){
	if(this.value == true){
		this.className = "inputFailure";
		this.value.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	}else if(this.value == false){
		this.className = "inputSuccess";
		this.value.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	}
}

function emailValid(){
	if(this.value.indexOf("@") == -1){
		this.className = "inputFailure";
		this.value.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	}
}


