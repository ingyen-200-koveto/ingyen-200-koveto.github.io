const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Adj meg egy felhasználónevet');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Adj meg egy email címet');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Érvénytelen email cím');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Adj meg egy jelszót');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Még egyszer be kell írnod a jelszót');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'A jelszó nem egyezik');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

$("button").on('click', () => {
  if(usernameValue !== '' && emailValue !== '' && isEmail(emailValue) && passwordValue !== '' && password2Value !== '' && passwordValue === password2Value) {
    $(".container").css("display: none")
    $(".container-success").css("display: block")
    $(".container-success-message").css("display: block")
    $(".container-success-message").text(`24 órán belül megkapod a(z) ${usernameValue} fiókodra a kívánt 200 követőt.`)
  }
}); 