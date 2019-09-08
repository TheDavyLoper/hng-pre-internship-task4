const display1 = document.querySelector('#display1');
const display2 = document.querySelector('#display2');
const display3 = document.querySelector('#display3');
const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const message = document.querySelector('textarea');
const button = document.querySelector('#submit');

const checkFirstName = (e) => {
	
	if (fname.value == "") {
		return display1.textContent="first Name field cannot be empty";
	}
	else if (fname.value.trim().length < 4) {
		return display1.textContent="first Name must be at least 4 characters long";
	}
	else {
		return display1.textContent="";
	}
};

const checkLastName = (e) => {

	if (lname.value == "" ) {
		return display2.textContent="Last Name field cannot be empty";
	}
	else if (lname.value.trim().length < 4) {
		return display2.textContent="Last Name must be at least 4 characters long";
	}
	else {
		return display2.textContent="";
	}
};

const checkMessage = (e) => {

	if (message.value == "") {
		return display3.textContent = "Message field cannot be empty";
	}
	else if (message.value.trim().length < 20) {
		return display3.textContent = "Enter at least 20 characters of message";
	}
	else {
		return display3.textContent="";
	}
}


button.addEventListener('click', checkFirstName);
button.addEventListener('click', checkLastName);
button.addEventListener('click', checkMessage);

