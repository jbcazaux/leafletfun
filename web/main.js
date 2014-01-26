
(function(){

    var map = L.map('map').setView([48.99921, 2.27550], 13);

    L.tileLayer('http://{s}.tile.cloudmade.com/06d880998e9b4f93b7ed9c9f83914667/997/256/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
    }).addTo(map);




    var csmeHtml = '<div class="popup-content">' +
                   '<div class="title">CSM Eaubonne Tennis</div>' +
                   '<div>Voici quelques photos !!</div>' +
                   '<img src="http://upload.wikimedia.org/wikipedia/commons/8/85/Tennis_pictogram.svg">' +
                   '<img src="http://upload.wikimedia.org/wikipedia/commons/1/13/Balles.JPG">' +
                   '<video controls>' +
                   '<source src="../img/mov_bbb.mp4" type="video/mp4">' +
                   '</video>' +
                   '</div>'
    var csmePopup = L.popup().setContent(csmeHtml);

    L.marker([48.99921, 2.27550]).addTo(map)
        .bindPopup(csmePopup).openPopup();

    /*var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);
    */


})();