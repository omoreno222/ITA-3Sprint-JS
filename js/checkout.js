function validate() {
	let error = 0;
	
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");
	
	// regExp for all cases validation
	let regExpJustLetter = /^[A-Za-z]*$/;
	let regExpJustNum = /^\d+$/;
	let regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	let regExpJustLetNum = /^[A-Za-z0-9\s]*$/;
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value === "" || fName.value.length<4 === true || regExpJustLetter.test(fName.value) === false){
		document.getElementById("fName").classList.add("is-invalid");
		document.getElementById("fName").classList.remove("is-valid");
		error++;
	} else {
		document.getElementById("fName").classList.add("is-valid");
		document.getElementById("fName").classList.remove("is-invalid");
	}

	if(fEmail.value === "" || regExpEmail.test(fEmail.value) === false){
		document.getElementById("fEmail").classList.add("is-invalid");
		document.getElementById("fEmail").classList.remove("is-valid");
		error++;
	} else {
		document.getElementById("fEmail").classList.add("is-valid");
		document.getElementById("fEmail").classList.remove("is-invalid");
	}

	if(fLastN.value === "" || fLastN.value.length<4 || regExpJustLetter.test(fLastN.value) === false){
		document.getElementById("fLastN").classList.add("is-invalid");
		document.getElementById("fLastN").classList.remove("is-valid");
		error++;
	} else {
		document.getElementById("fLastN").classList.add("is-valid");
		document.getElementById("fLastN").classList.remove("is-invalid");
	}
	
	// para el teléfono uso min.length de 9 dígitos no tres como dice el enunciado.
	if(fPhone === "" || fPhone.value.length<9 || regExpJustNum.test(fPhone.value) === false){
		document.getElementById("fPhone").classList.add("is-invalid");
		document.getElementById("fPhone").classList.remove("is-valid");
		error++;
	} else {
		document.getElementById("fPhone").classList.add("is-valid");
		document.getElementById("fPhone").classList.remove("is-invalid");
	}

	if(fPassword.value === "" || fPassword.value.length<4 || regExpJustLetNum.test(fPassword.value) === false){
		document.getElementById("fPassword").classList.add("is-invalid");
		document.getElementById("fPassword").classList.remove("is-valid");
		error++;
	} else {
		document.getElementById("fPassword").classList.add("is-valid");
		document.getElementById("fPassword").classList.remove("is-invalid");
	}

	// para la dirección uso min.length de 12 dígitos no tres como dice el enunciado.
	if(fAddress === "" || fAddress.value.length<12){
		document.getElementById("fAddress").classList.add("is-invalid");
		document.getElementById("fAddress").classList.remove("is-valid");
		error++;
	} else {
		document.getElementById("fAddress").classList.add("is-valid");
		document.getElementById("fAddress").classList.remove("is-invalid");
	}
		 
	if(error>0){
		alert("ERROR. Form has some errors. Click 'OK button to see them.");
	}else{
		alert("OK. Click 'OK' to submit");
	}
}