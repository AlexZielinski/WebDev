//TO DO LIST
//-------------------------------------------------------------------------------
//		- Check Position [Cannot be left blank]
//					***COMPLETE***

//		- Check Passed COMP 1510 (Cannot be left blank and Cannot answer 'No')
//					***COMPLETE***

//		- Check Earliest Start Date (Must be a real date)
//					***COMPLETE***

//		- Check Resume (Cannot be empty and must be a .doc .docx or .pdf file)
//					***COMPLETE***

//		- Check Name (Cannot be left blank)
//					***COMPLETE***

//		- Check Email Address (Must be a real email)
//					***COMPLETE***

//		- Check Phone Number (Must be numerical values and quantity sensitive)
//					***COMPLETE***


//		- Highlights field that has been incorrectly filled
//					***COMPLETE***

//  	- Adds innerHTML to div's of highlighted fields
//					***COMPLETE***
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------

// PHP TO DO LIST
// -----------------------------------------------------------------------------
//
//		- Check First Name.
//		- Check last Name.
//		- Check Email.
//------------------------------------------------------------------------------
function checkForm() {
	var x = document.getElementById('email').value;
	var emailReg =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.(?:|com|org|ca)$/i;
	var email = document.getElementById('div_7');
	
	var x2 = document.getElementById('position').value;
	var position = document.getElementById('div_1');
	
	var x3 = document.getElementById('radPassedWeb_0').checked;
	var x4 = document.getElementById('radPassedWeb_1').checked;
	var comp1536 = document.getElementById('div_2');
	
	var x5 = document.getElementById('startDate_0').value;
	var x6 = document.getElementById('startDate_1').value;
	var x7 = document.getElementById('startDate_2').value;
	var date = document.getElementById('div_3');
	
	var x10 = document.getElementById('firstName').value;
	var x11 = document.getElementById('lastName').value;
	var nameReg = /^[A-Za-z]{1,50}$/;
	var name = document.getElementById('div_6');
	
	var p1 = document.getElementById('phone_0').value;
	var p2 = document.getElementById('phone_1').value;
	var p3 = document.getElementById('phone_2').value;
	var phoneReg = /^\s*\d+\s*$/;
	var phone = document.getElementById('div_8');
	
	// Checks to see if a valid position is selected.
	if(x2 == 0) {
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
	if(x3 == false && x4 == false || x4 == true) {
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
	if (parseInt(x5) < 1 || parseInt(x5) > 12 || x5 == ""){
		date.className='error';
		document.getElementById('errPosition2').innerHTML='Invalid month.';
		alert("Please fill out the highlighted field.");
		return false;
	}
	if (parseInt(x6) < 1 || parseInt(x6) > 31 || x6 == ""){
		date.className='error';
		document.getElementById('errPosition2').innerHTML='Invalid day.';
		alert("Please fill out the highlighted field.");
		return false;
	}
	if (parseInt(x7) < 2013 || parseInt(x7) > 2999 || x7 == ""){
		date.className='error';
		document.getElementById('errPosition2').innerHTML='Invalid year.';
		alert("Please fill out the highlighted field.");
		return false;
	}
	else {
		date.className='div3';
		document.getElementById('errPosition2').innerHTML='';
	}
	
	// Checks if resume file is valid.
	if (!checkResume()) {
		alert ("Please fill out the highlighted field.")
		return false;
	}
	else {
		document.getElementById('div_4').className='div4';
	}
	
	// Checks first name.
	if(x10.length == 0 || !x10.match(nameReg)) {
		document.getElementById('errPosition4').innerHTML='Must enter first name.';
		name.className='error';
		alert("Please fill out the highlighted field.");
		return false;
	}
	
	// Checks last name.
	if(x11.length == 0 || !x11.match(nameReg)) {
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
    if (!x.match(emailReg) || x.length == 0 || x == "") {
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