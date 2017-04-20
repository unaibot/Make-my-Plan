
function displayApp() {
  $(".button-start").fadeOut();
  $(".background").fadeIn();
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
 			searchPanel.setAttribute("id","address"); 
      searchPanel.setAttribute("class","intro");  
   		searchPanel.setAttribute("type","textbox");
   		searchPanel.setAttribute("value","Place...");

 	var button = document.createElement("input");
			button.setAttribute("id","submit");  
 			button.setAttribute("type","button");
 			button.setAttribute("value","Search");
 			button.setAttribute("onclick","initMap();");
 		 	
  ul.setAttribute("id","panel-board-list-item"); 
 
 	ul.appendChild(li.appendChild(searchPanel)); 
 	ul.appendChild(li.appendChild(button));  

 	item.appendChild(ul);  
}

var itemList = [];
var item = [];


window.initMap = function () {

    geocoder = new google.maps.Geocoder();

    var address = document.getElementById('address').value;

    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            var theResult = {
                zoom: 14,
                center: results[0].geometry.location,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                styles: 
                    [  {"featureType": "all", "elementType": "labels", "stylers": 
                    [ { "visibility": "off" } ]   }, {"featureType": "administrative", "elementType": "all", "stylers": 
                    [ { "visibility": "simplified"  }, { "color": "#5b6571"  }, { "lightness": "35" } ]    },

                    {"featureType": "administrative.neighborhood", "elementType": "all", "stylers": [ { "visibility": "off" } ] }, 
                    {"featureType": "landscape", "elementType": "all", "stylers": [ { "visibility": "on" }, { "color": "#f3f4f4" }  ] },
                    {"featureType": "landscape.man_made", "elementType": "geometry", "stylers": [ { "weight": 0.9 }, { "visibility": "off" }  ]  },
                    {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": 
                    [ { "visibility": "on" }, { "color": "#83cead" }   ]   },
                    {"featureType": "road", "elementType": "all", "stylers": [ { "visibility": "on" }, { "color": "#ffffff" }  ]  },
                    {"featureType": "road", "elementType": "labels", "stylers": [ { "visibility": "off" } ]     },
                    {   "featureType": "road.highway", "elementType": "all",  "stylers": [ { "visibility": "on"  }, { "color": "#fee379"  }  ]   },
                    { "featureType": "road.highway",  "elementType": "geometry",  "stylers": [ { "visibility": "on" } ]
                    }, {   "featureType": "road.highway", "elementType": "labels",  "stylers": [ { "visibility": "off" } ]  },
                    { "featureType": "road.highway",  "elementType": "labels.icon",  "stylers": [ { "visibility": "off"} ]  },
                    {   "featureType": "road.highway.controlled_access", "elementType": "labels.icon",  "stylers": [ { "visibility": "off" } ]    },
                    {  "featureType": "road.arterial", "elementType": "all","stylers": [ { "visibility": "simplified" },  { "color": "#ffffff" }  ]    },
                    {                    "featureType": "road.arterial",
                    "elementType": "labels",  "stylers": [ { "visibility": "off" } ]    },
                    { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ]   },     
                    {"featureType": "water", "elementType": "all", "stylers": [ { "visibility": "on" },  { "color": "#7fc8ed" }  ]    }    ]
    };

        map = new google.maps.Map(document.getElementById("map"), theResult);
        
    
    var marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: map,
          animation: google.maps.Animation.DROP,
    });

    var contentString = '<h1 id="firstHeading" class="firstHeading"> <var>title</var></h1>' + 
      '<h3><var>hour</var></h3>' +
      '<h4><var>notes</var></h4>';
    var infowindow = new google.maps.InfoWindow({ content: contentString });
    marker.addListener('click', function() { infowindow.open(map, marker); }); 

    
    } else {
         alert('Geocode was not successful for the following reason: ' + status);
    }

    
  });
}


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