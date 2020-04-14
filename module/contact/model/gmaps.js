$(document).ready(function () {
 // console.log("ENTRA MAP");
  if(document.getElementById("mapa") != null){
    console.log("ENTRA MAP 2");
    var script = document.createElement('script');
    script.src="https://maps.googleapis.com/maps/api/js?key="+ KEY_API + "&callback=initMap";
    /* "https://maps.googleapis.com/maps/api/js?key="+AIzaSyD5ZG3Hbslx2gSBiZ2VQrmflf8KWpQ96Bg+"&callback=initMap"; */
    /*src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5ZG3Hbslx2gSBiZ2VQrmflf8KWpQ96Bg&callback=initMap"*/
    //script.src = "https://maps.googleapis.com/maps/api/js?key=" + KEY_API + "&callback=initMap";
    //https://maps.googleapis.com/maps/api/js?key="+"tu api"+"&callback=initMap";
    script.async;
    script.defer;
    document.getElementsByTagName('script')[0].parentNode.appendChild(script);
    console.log(script);
  }
})


function initMap() {
  // var
  var markers = [];

    //console.log(jewelry_stores)
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: new google.maps.LatLng(40.891859, -3.695447),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var infowindow = new google.maps.InfoWindow();
  $.ajax({
    type: "GET",
    dataType: 'json',
    url: "module/contact/controller/controller_contact.php?op=maps"
  })
  .done(function (data) {
    console.log(data);
    
    for (row in data) {
      console.log(data);

      var newMarker = new google.maps.Marker({
        position: new google.maps.LatLng(
          data[row].latitud,
          data[row].longitud),
        map: map,
        title:
        data[row].Tienda
      });

      google.maps.event.addListener(newMarker, 'click', (function (newMarker, row) {
        return function () {
          infowindow.setContent(
            data[row].dscp);
          infowindow.open(map, newMarker);
        }
      })(newMarker, row));

      markers.push(newMarker);
    }
  });
}
 