function initMap() {
    readTextFile(jsonFileUrl, function (o) {
        var e = JSON.parse(o),
            n = { url: e.map[0].icon, scaledSize: new google.maps.Size(e.map[0].iconWidth, e.map[0].iconHeight) },
            t = new google.maps.LatLng(e.map[0].centerLat, e.map[0].centerLng);
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: e.map[0].initialZoom,
            center: t,
            mapTypeId: e.map[0].mapType,
            zoomControl: e.map[0].zoomControl,
            mapTypeControl: e.map[0].mapTypeControl,
            scaleControl: e.map[0].scaleControl,
            streetViewControl: e.map[0].streetViewControl,
            rotateControl: e.map[0].rotateControl,
            fullscreenControl: e.map[0].fullscreenControl,
        });
        for (var a = 0; a < e.locations.length; a++) {
            var l = new google.maps.LatLng(e.locations[a].lat, e.locations[a].lng);
            new google.maps.Marker({ position: l, map: map, title: e.locations[a].name, icon: n });
        }
    });
}
function toggleBounce() {
    null !== marker.getAnimation() ? marker.setAnimation(null) : marker.setAnimation(google.maps.Animation.BOUNCE);
}
function readTextFile(o, e) {
    var n = new XMLHttpRequest();
    n.overrideMimeType("application/json"),
        n.open("GET", o, !0),
        (n.onreadystatechange = function () {
            4 === n.readyState && 200 == n.status && e(n.responseText);
        }),
        n.send(null);
}
window.initMap = initMap;
