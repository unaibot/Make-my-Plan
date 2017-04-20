
function initAutocomplete() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -33.8688, lng: 151.2195},
    zoom: 13,
    mapTypeId: 'roadmap'
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  var controlPos = map.controls.push(input);

 

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}



function displayApp() {
  $(".button-start").fadeOut();
  $(".background").fadeIn();
  initAutocomplete();
} 


function createTodo() {

  var item = document.getElementById("panel-board-list");
  var ul = document.createElement("ul");
  var li = document.createElement("li");

 	var title = prompt("Enter a title");
  var titleH = document.createElement("H5");
  var titleLi = document.createElement("li");
  titleH.appendChild(document.createTextNode(title));
  titleLi.appendChild(titleH);
  ul.appendChild(titleLi);

 	var hour = prompt("Enter the date");  
  var hourH = document.createElement("H5");
  var hourLi = document.createElement("li");
  hourH.appendChild(document.createTextNode(hour));
  hourLi.appendChild(hourH);
  ul.appendChild(hourLi);

 	var notes = prompt("Enter notes");
  var notesH = document.createElement("H5");
  var notesLi = document.createElement("li");
  notesH.appendChild(document.createTextNode(notes));
  notesLi.appendChild(notesH);
  ul.appendChild(notesLi); 
  
 	var searchPanel = document.createElement("input");
 			searchPanel.setAttribute("id","pac-input"); 
      searchPanel.setAttribute("class","controls");  
   		searchPanel.setAttribute("type","textbox");
   		searchPanel.setAttribute("value","Place...");

 	 		 	
  ul.setAttribute("id","panel-board-list-item"); 
 
 	ul.appendChild(li.appendChild(searchPanel)); 
  

 	item.appendChild(ul); 

  initAutocomplete(); 
}








/*

window.initMap =  function () {

*/




/*
document.getElementById('panel-board-list-item').addEventListener('click', function() {
   var value =document.getElementById('address').value;
   if (value) {
      console.log(value);
    } else {
      console.log(value);
    }
});
*/