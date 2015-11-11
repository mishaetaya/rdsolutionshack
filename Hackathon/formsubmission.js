$(document).ready(function() {

	$("#formsubmit").click(function() {
		var name = $("#name").val();
		var email = $("#email").val();
		var module = $("#module").val();
		var messagetext = $("#messagerationale").val();
	$("#returnmessage").empty(); // To empty previous error/success message.
	// Checking for blank fields.
	if (name == '' || email == '' || module == '') {
	alert("Please Fill Required Fields");
	} else {
	// Returns successful data submission message when the entered information is stored in database.
	$.post("contact_form.php", {
		name1: name,
		email1: email,
		module1: module,
		messagetext1: messagetext
	}, function(data) {
	$("#returnmessage").append(data); // Append returned message to message paragraph.
	if (data == "Your Query has been received, We will contact you soon.") {
	$("#form")[0].reset(); // To reset form fields on success.
	}
	});
	}
	});

});