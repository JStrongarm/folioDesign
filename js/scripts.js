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
firstName.addEventListener("blur", formValid);
lastName.addEventListener("blur", formValid);
email.addEventListener("blur", formValid);
comments.addEventListener("blur", formValid);

function formValid(){
	if(this.value == null || this.value == ""){
		this.className = "";
		this.className = "inputSuccess";
	}else{
		this.className = "";
		this.className = "inputFailure";
		console.log("shiiiiiiiiiiit");
	}
}
