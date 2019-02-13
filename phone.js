$(document).ready(function() { // do this when the document is loaded
	$("#Dialer").show(); // show the element with ID "element"
	$("#plusContact").hide(); // hide the element with ID "otherElement"
	$("#contactList").hide(); // hide the element with ID "otherElement"
	$("#about").hide();	// hide other element

    console.log("heyyyy");
$("#dialTab").click(function() { // when "button_id" is clicked
	$("#Dialer").show(); // show element
	$("#plusContact").hide();	// hide other element
	$("#contactList").hide();	// hide other element
	$("#about").hide();	// hide other element


});
$("#contactListTab").click(function() { // when "button_id" is clicked
	$("#contactList").show(); // show element
	$("#plusContact").hide();	// hide other element
	$("#Dialer").hide();	// hide other element
	$("#about").hide();	// hide other element

});
$("#plusContactTab").click(function() { // when "button_id" is clicked
	$("#plusContact").show(); // show element
	$("#contactList").hide();	// hide other element
	$("#Dialer").hide();	// hide other element
	$("#about").hide();	// hide other element

});
$("#aboutTab").click(function() { // when "button_id" is clicked
	$("#about").show(); // show element
	$("#contactList").hide();	// hide other element
	$("#Dialer").hide();	// hide other element
	$("#plusContact").hide();	// hide other element

});
});
