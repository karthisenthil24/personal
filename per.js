function add_item() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var gender = document.getElementById("gender").value;
	var address = document.getElementById("address").value;
	var city = document.getElementById("city").value;
	var state = document.getElementById("state").value;
	var phoneno = document.getElementById("phoneno").value;
	document.getElementById("output").innerHTML='<P><b>Name : </b>'+name+'<br><b> Email : </b>'+email+'<br><b> Gender : </b>' + gender+'<br><b> Address : </b>'+address+'<br><b> City : </b>'+city+'<br><b> State : </b>'+state+'<br><b> Phone No : </b>'+phoneno+'<br></P>';
} 