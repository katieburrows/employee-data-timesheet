// Initialize Firebase
var config = {
  apiKey: "AIzaSyAM8ta0Tk5SAhAkAtBML8_epd237c2CN7w",
  authDomain: "time-sheet-b13fa.firebaseapp.com",
  databaseURL: "https://time-sheet-b13fa.firebaseio.com",
  projectId: "time-sheet-b13fa",
  storageBucket: "time-sheet-b13fa.appspot.com",
  messagingSenderId: "851962457009"
};

firebase.initializeApp(config);

var dataBase = firebase.database();

//-------------------------------------------

var employeeName = "";
var roles = "";
var startDate = "";
var monthsWorked = 0;
var rate = 0;
var total = 0;

dataBase.ref("/employeeData").on("value", function(snapshot){


		
})



//global variables


// initial
	//write variable to page(function)

//on click of submit button
$("#submitButton").on("click", function() {

	employeeName = $("#nameInput").val().trim();
	console.log(employeeName);

	roles = $("#roleInput").val().trim();
	console.log(roles);

	startDate = $("#startInput").val().trim();
	console.log(startDate);


	rate = $("#rateInput").val().trim();
	console.log(rate);

	event.preventDefault();

	dataBase.ref().push({
		name: employeeName,
		role: roles,
		startDate: startDate,
		rate: rate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

	$("input").val("");

});

$("table").on("click", "#deleteButton", function() {

	var x = confirm("Are you sure you want to delete this Employee?");

	if (x) {

		var id = $(this).attr("data-id")

		dataBase.ref().child(id).remove();

		$(this).parents("tr").remove();


	} else {
		console.log("employee NOT deleted")
	}
});




dataBase.ref().on("child_added", function(snapshot) {

      // Log everything that's coming out of snapshot

      console.log(snapshot.key);

      // console.log(snapshot.val().name);

      // console.log(snapshot.val().email);

      // console.log(snapshot.val().age);

      // console.log(snapshot.val().comment);
      var months = moment().diff(snapshot.val().startDate, 'months');

      var total = months * snapshot.val().rate

      // Change the HTML to reflect

      $("#newEmployee").append("<tr><td id='name'>" + snapshot.val().name + "</td><td id='role'>" + snapshot.val().role + "</td><td id='startDate'>" + snapshot.val().startDate + "</td><td id='monthsWorked'>" + months + "</td><td id='rate'>$" + snapshot.val().rate + "</td><td id='total'>$" + total + "</td><td><button class='btn btn-danger' id='deleteButton' data-id=" + snapshot.key + ">-</button></td></tr>"
      	);

    // Handle the errors

    }, function(errorObject) {

      console.log("Errors handled: " + errorObject.code);

    });

	