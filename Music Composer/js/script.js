	function myFunction() {
	// body...
	alert("Hello, please fill the form below.");
}

function validationForm(event)
{
	event.preventDefault();   //prevent the form from submitting 



	var nameInput = document.getElementById('name');
	var emailInput = document.getElementById('email');

	//simple validation 
	if(nameInput.value.trim()==='')
	{
		alert('please enter your name.');
		nameInput.focus();
		
	}

	if(!isValidEmail(emailInput.value.trim()))
	{
		alert('please enter a valid email address.');
		emailInput.focus();
		
	}



		//if validation passes , you can proceed with form submission or further processing 
		alert('form submitted successfully !');

}

function isValidEmail(email)
{
	//basic email validation using the regular expression
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}








