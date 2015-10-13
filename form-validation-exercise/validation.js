// Java Script validation


function checkForm() {
	
	// Variables for position information
	var pos = document.getElementById('position').value;
	var position = document.getElementById('div_1');
	
	// Variables for passed comp 1536 information
	var x1 = document.getElementById('radPassedWeb_0').checked;
	var x2 = document.getElementById('radPassedWeb_1').checked;
	var comp1536 = document.getElementById('div_2');
	
	// Variables for earliest start date information
	var d1 = document.getElementById('startDate_0').value;
	var d2 = document.getElementById('startDate_1').value;
	var d3 = document.getElementById('startDate_2').value;
	var date = document.getElementById('div_3');
	
	// Variables for first and last name information
	var n1 = document.getElementById('firstName').value;
	var n2 = document.getElementById('lastName').value;
	var nameReg = /^[A-Za-z]{1,50}$/;
	var name = document.getElementById('div_6');
	
	// Variables for email field information
	var email = document.getElementById('email').value;
	var emailReg =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(?:|com|org|ca)$/i;
	var email = document.getElementById('div_7');;
	
	// Variables for phone number information
	var p1 = document.getElementById('phone_0').value;
	var p2 = document.getElementById('phone_1').value;
	var p3 = document.getElementById('phone_2').value;
	var phoneReg = /^\s*\d+\s*$/;
	var phone = document.getElementById('div_8');
	
	// Checks to see if a valid position is selected.
	if(pos == 0) {
		position.className='error';
		document.getElementById('errPosition').innerHTML='You must select a position.';
		alert("Please fill out the highlighted field.");
		return false;
	}
	else {
		position.className='div1';
		document.getElementById('errPosition').innerHTML='';
	}
	
	// Checks to see if COMP 1510 is passed or if anything was chosen at all.
	if(x1 == false && x2 == false || x2 == true) {
		comp1536.className='error';
		document.getElementById('errPosition1').innerHTML='You must have passed COMP 1510.';
		alert("Please fill out the highlighted field.");
		return false;
	}
	else {
		comp1536.className='div2';
		document.getElementById('errPosition1').innerHTML='';
	}
	
	// Checks to see if start date dates are valid.
	if (parseInt(d1) < 1 || parseInt(d1) > 12 || d1 == ""){
		date.className='error';
		document.getElementById('errPosition2').innerHTML='Invalid month.';
		alert("Please fill out the highlighted field.");
		return false;
	}
	if (parseInt(d2) < 1 || parseInt(d2) > 31 || d2 == ""){
		date.className='error';
		document.getElementById('errPosition2').innerHTML='Invalid day.';
		alert("Please fill out the highlighted field.");
		return false;
	}
	if (parseInt(d3) < 2013 || parseInt(d3) > 2999 || d3 == ""){
		date.className='error';
		document.getElementById('errPosition2').innerHTML='Invalid year.';
		alert("Please fill out the highlighted field.");
		return false;
	}
	else {
		date.className='div3';
		document.getElementById('errPosition2').innerHTML='';
	}
	
	// Checks if resume file is valid by calling the checkResume() method.
	if (!checkResume()) {
		alert ("Please fill out the highlighted field.")
		return false;
	}
	else {
		document.getElementById('div_4').className='div4';
	}
	
	// Checks first name.
	if(n1.length == 0 || !n1.match(nameReg)) {
		document.getElementById('errPosition4').innerHTML='Must enter first name.';
		name.className='error';
		alert("Please fill out the highlighted field.");
		return false;
	}
	
	// Checks last name.
	if(n2.length == 0 || !n2.match(nameReg)) {
		document.getElementById('errPosition4').innerHTML='Must enter last name.';
		name.className='error';
		alert("Please fill out the highlighted field.");
		return false;
	}
	else {
		name.className='div5';
		document.getElementById('errPosition4').innerHTML='';
	}
	
	// Checks email
    if (!email.match(emailReg) || email.length == 0 || x == "") {
		document.getElementById('errPosition5').innerHTML='Invalid email';
		email.className='error';
		alert("Please fill out the highlighted field.");
		return false;
    }
	else {
		email.className='div6';
		document.getElementById('errPosition5').innerHTML='';
	}
	
	// Checks phone number.
	if (parseInt(p1)  < 100 || parseInt(p1) > 999 || p1 == "" || !p1.match(phoneReg)) {
		document.getElementById('errPosition6').innerHTML='Inlvalid number.';
		phone.className='error';
		alert("Please fill out the highlighted field.");
		return false
	}
	if (parseInt(p2)  < 100 || parseInt(p2) > 999 || p2 == "" || !p2.match(phoneReg)) {
		document.getElementById('errPosition6').innerHTML='Inlvalid number.';
		phone.className='error';
		alert("Please fill out the highlighted field.");
		return false;
	}
	
	if (parseInt(p3)  < 1000 || parseInt(p3) > 9999 || p3 == "" || !p3.match(phoneReg)) {
		document.getElementById('errPosition6').innerHTML='Inlvalid number.';
		phone.className='error';
		alert("Please fill out the highlighted field.");
		return false;
	}
	else {
		return true;
		phone.className='div7';
		document.getElementById('errPosition6').innerHTML='';
	}
}

// Method to validate Resume. Only way I could make resume validation work was to make a method.
function checkResume() {
	var x = document.getElementById('resume').value;
	var sub = x.substring(x.length-3);
	var validate;
	
	if(sub == "doc" || sub == "ocx" || sub == "pdf"){
		validate = true
	}
	if(sub == 0 || sub == "") {
		document.getElementById('div_4').className='error'
		document.getElementById('errPosition3').innerHTML='Invalid file type. Must be .doc , .docx or .pdf ';
		validate = false;
	}
	return validate;
}