'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

//	$('#colorBtn').click(randomizeColors);


}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	$.get("/project/" + idNumber, addProject);

}
function addProject(result){
//	console.log(result);
//	getting any of the syntax wrong for projectHTML will get errors
	var projectHTML = '<p>' + result['title'] + '</p>' +
	'<p>' + result['date'] + '</p>' +
	'<img src="' + result['image'] + ' " class="detailsImage">' +
	'<p>' + result['summary'] + '</p>';
//	console.log(projectHTML);
//	console.log("#project"+result['id']+".details");
	//The space between " .details" is absolutely necessary (ex: #project1 .details vs #project1.details)
	$("#project"+ result['id'] + " .details").html(projectHTML);
}

/*
function addProject(result) {
  var projectHTML = '<a href="#" class="thumbnail">' +
    '<img src="' + result['image'] + '" class="img">' +
    '<p>' + result['title'] + '</p>' +
    '<p><small>' + result['date'] +
    '</small></p></a>'; 
}*/