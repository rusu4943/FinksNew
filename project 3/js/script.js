
// register
if(location.href.indexOf('registration.php') > 0) {
	var username = document.getElementById("name");
	var pwd = document.getElementById("pwd");
	var pwd1 = document.getElementById("pwd1");
	var phone = document.getElementById("phone");
	var email = document.getElementById("email");
	var bthdate = document.getElementById("date");
	var intro = document.getElementById("intro");
	var register = document.getElementById("register");
	register.addEventListener('click', function() {
		// user name
		//user name have to contain more than 6 elements
		// var nameVal = username.value;
		// if(nameVal ==""){
		// 	alert("Username can not be empty!");
		// 	return false;
		// }else{
		// 	var pat = /^\w{6,}$/; 
		// 	if(!pat.test(nameVal)){
		// 		alert("User name should contain at least six elements!");
		// 		return false;
		// 	}
		// }
		// //password rule
		// var passwordVal = pwd.value;
		// var passwordVal1 = pwd1.value;
		// if(passwordVal == "") {
		// 	alert('password can not be blank!');
		// 	return false;
		// }else if(passwordVal1 == ""){
		// 	alert('Enter the password again can not be empty!');
		// 	return false;
		// }else if(passwordVal.length < 6 || passwordVal.length > 8) {
		// 	alert('The password must be 6 to 8 digits!');
		// 	return false;
		// }else if(passwordVal != passwordVal1){
		// 	alert("Two password inputs are inconsistent!");
		// }
		// // phone rule 
		// var phoneVal = phone.value;
		// if(phoneVal == "") {
		// 	alert('Phone number can not be blank!');
		// 	return false;
		// } else {
		// 	var reg = /^1[3|4|5|7|8][0-9]{9}$/;
		// 	if(!reg.test(phoneVal)) {
		// 		alert('please enter a valid phone number!');
		// 		return false;
		// 	}
		// }
		// //email
		// var emailVal = email.value;
		// if (emailVal == ""){
		// 	alert('E-mail can not be empty!');
		// 	return false;
		// }else{
		// 	var myReg=/^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
		// 	if(!myReg.test(emailVal)) {
		// 		alert('E-mail format is incorrect!');
		// 		return false;
		// 	}
		// }
		
		// //Birthday
		// var bthdateVal = bthdate.value;
		// if(bthdateVal == "") {
		// 	alert('Birthday date can not be empty!');
		// 	return false;
		// } 
		// //Introduction
		// var introVal = intro.value;
		// if(introVal == "") {
		// 	alert('Introduction can not be empty!');
		// 	return false;
		// } 
		
		//alert("Submitted successfully!");
		
		
		
		
			
	})
}

// search & UPLOAD

if(location.href.indexOf('search.php') > 0 || location.href.indexOf('submission.php') > 0){

	function getLocation(){ 
		if (navigator.geolocation){ 
			
			navigator.geolocation.getCurrentPosition(showPosition,showError); 
		}else{ 
			alert("Web borwser decline the getting location request."); 
		} 
	} 
    //error case
	function showError(error){ 
		switch(error.code) { 
			case error.PERMISSION_DENIED: 
			alert("Fail to get location, the user decline the getting location request"); 
			break; 
			case error.POSITION_UNAVAILABLE: 
			alert("The position is unavailable."); 
			break; 
			case error.TIMEOUT: 
			alert("The connection is time out"); 
			break; 
			case error.UNKNOWN_ERROR: 
			alert("Unkown issue."); 
			break; 
		} 
	} 

   // location of restaurant
	function initMap() {

		var la = 43.6439175;
    	var ln = -79.40162889999999;
		navigator.geolocation.getCurrentPosition(function(position) {  
			//alert('s');
			 map = new google.maps.Map(document.getElementById('maps'), {
				center : {
					lat : position.coords.latitude,
					lng : position.coords.longitude
				},
				zoom : 11,
				//mapTypeId: google.maps.MapTypeId.ROADMAP
				mapTypeId: 'terrain'
			});
			infoWindow = new google.maps.InfoWindow;
			map.addListener('click', function(event) {
				console.log(event.latLng.lat() + '~' + event.latLng.lng());
				var contentString = 'Oretta，633 King St W, Toronto, ON M5V 1M5. <br/><a style="color:#000;" href="individual_sample.html">click link to restaurant</a>';

		        // Replace the info window's content and position.
		        infoWindow.setContent(contentString);
		       

		        infoWindow.open(map);
			});
        	
		})
		
		
		var marker = null;

		function autoUpdate() {
		  navigator.geolocation.getCurrentPosition(function(position) {  
		  	
		    var newPoint = new google.maps.LatLng(position.coords.latitude, 
		                                          position.coords.longitude);

		    if (marker) {
		      // Marker already created - Move it
		      marker.setPosition(newPoint);
		    } else {
		      // Marker does not exist - Create it
		      marker = new google.maps.Marker({
		        position: newPoint,
		        map: map
		      });
		    }

		    // Center the map on the new position
		    //map.setCenter(newPoint);
		  }); 

		  // Call the autoUpdate() function every 5 seconds
		  //setTimeout(autoUpdate, 5000);
		}

		autoUpdate();

		
		  
        

	}

	//initialize
	function initialize() {
		geocoder = new google.maps.Geocoder();
		var btn = document.getElementById('btn-click');
		btn.onclick = function() {
			//alert('s')
			initMap();
		}
		
		
	}


	function showPosition(position){ 
		var lat = position.coords.latitude; 
		var lag = position.coords.longitude; 


		
	} 

	//getLocation();

}

// results_sample.php
if(location.href.indexOf('results_sample.php') > 0 || location.href.indexOf('individual_sample.html') > 0) {

	var la = 43.6439175;
    var ln = -79.40162889999999;
	function initMap() {
		
		//navigator.geolocation.getCurrentPosition(function(position) {  
		
			 map = new google.maps.Map(document.getElementById('maps'), {
				center : {
					lat : la, //position.coords.latitude, 
					lng : ln // position.coords.longitude
				},
				zoom : 11,
				//mapTypeId: google.maps.MapTypeId.ROADMAP
				mapTypeId: 'terrain'
			});
			infoWindow = new google.maps.InfoWindow;
			map.addListener('click', function(event) {
				console.log(event.latLng.lat() + '~' + event.latLng.lng());
				var contentString = '<div style="color:#000;">oretta，633 King St W, Toronto, ON M5V 1M5. <br/><a style="color:#000;" href="individual_sample.html">click link to restaurant</a></div>';

		        // Replace the info window's content and position.
		        infoWindow.setContent(contentString);
		       
		        infoWindow.open(map);
			});
        	
		//})
		
		
		var marker = null;

		function autoUpdate() {
		  //navigator.geolocation.getCurrentPosition(function(position) {  
		  	
		    var newPoint = new google.maps.LatLng(la, ln);

		    if (marker) {
		      // Marker already created - Move it
		      marker.setPosition(newPoint);
		    } else {
		      // Marker does not exist - Create it
		      marker = new google.maps.Marker({
		        position: newPoint,
		        map: map
		      });
		    }

		    // Center the map on the new position
		    //map.setCenter(newPoint);
		  //}); 

		  // Call the autoUpdate() function every 5 seconds
		  //setTimeout(autoUpdate, 5000);
		}

		autoUpdate();

	}

	//initialize
	function initialize() {
		geocoder = new google.maps.Geocoder();
		initMap();
		
	}


}