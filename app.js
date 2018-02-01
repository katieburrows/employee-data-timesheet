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

var database =firebase.database();

//-------------------------------------------

var employeeName = "";
var rols = "";
var StartDate =;
var monthsWorked = 0;
var rate = 0;
var total = 0;

database.ref("/employeeData").on("value", function(snapshot){

		
})
