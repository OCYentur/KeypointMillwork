var map1;

$(document).ready(function () {
    google.maps.visualRefresh = true;
    initialize();
});

function initialize() {
    var myLatlng = new google.maps.LatLng(43.693098, -79.699757);
    var mapProp1 = {
        center: myLatlng,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map1 = new google.maps.Map(document.getElementById("gMap1"), mapProp1);
    //var marker1 = new google.maps.Marker({
    //    draggable: true,
    //    position: myLatlng,
    //    map: map1,
    //    title: "Keypoint Millwork"
    //});
    //marker1.setMap(map1);
    //google.maps.event.addListenerOnce(map1, 'idle', function () {
    //    google.maps.event.trigger(map1, 'resize');
    //});
    google.maps.event.addListenerOnce(map1, 'idle', function () {
        google.maps.event.trigger(map1, 'resize');
    });
}