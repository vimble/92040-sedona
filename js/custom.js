var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-header__toggle");

navMain.classList.remove("main-nav--nojs");
navMain.classList.add("main-nav--closed");
navToggle.classList.remove("main-header__toggle--nojs");
navToggle.classList.remove("main-header__toggle--open");
navToggle.classList.add("main-header__toggle--closed");

navToggle.addEventListener('click', function(event) {
  event.preventDefault();
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navToggle.classList.remove("main-header__toggle--closed");
    navMain.classList.add("main-nav--opened");
    navToggle.classList.add("main-header__toggle--open");
  }
  else {
    navMain.classList.add("main-nav--closed");
    navToggle.classList.remove("main-header__toggle--open");
    navToggle.classList.add("main-header__toggle--closed");
  }
});

function initialize() {
  var myLatlng = new google.maps.LatLng(34.9229592,-112.0479171);
  var myOptions = {
    zoom: 7,
    center: myLatlng,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: false
  }
  var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
  var image = "../img/icon-map-marker.svg";
  var beachMarker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
