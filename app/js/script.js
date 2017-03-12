$(document).ready(function(){
	setTimeout("$('nav').show('slide'), 4000", 500)
})

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(50.450050, 30.517719),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}