
(function($){

    var map = L.map('map').setView([48.99921, 2.27550], 13);

    L.tileLayer('http://{s}.tile.cloudmade.com/06d880998e9b4f93b7ed9c9f83914667/997/256/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
    }).addTo(map);


    $.get('/pois').done(addPoisToMap);


    function addPoisToMap(pois){

        $.each(pois, function(){
            var content = popupContent.replace("{name}", this.name)
                .replace("{desc}", this.description)
                .replace("{img1}", this.resources[0].url)
                .replace("{img2}", this.resources[1].url)
                .replace("{video}", this.resources[2].url);

            var popup = L.popup().setContent(content);
            L.marker([this.lat, this.lng]).addTo(map).bindPopup(popup);
        });
    }

    var popupContent = '<div class="popup-content">' +
        '<div class="title">{name}</div>' +
        '<div>{desc}</div>' +
        '<img src="{img1}">' +
        '<img src="{img2}">' +
        '<video controls>' +
        '<source src="{video}" type="video/mp4">' +
        '</video>' +
        '</div>'


    /*var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }
    map.on('click', onMapClick);
    */


})(jQuery);