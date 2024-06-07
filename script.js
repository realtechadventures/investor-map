function initMap() {
    var mapOptions = {
        center: { lat: 32.7767, lng: -97.7970 },
        zoom: 10
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
    // Sample data - replace with your actual data
    var investorData = [
        { lat: 32.7812, lng: -97.7970, count: 5 },
        { lat: 32.7567, lng: -97.7960, count: 3 },
        // Add more data points here
    ];
    
    investorData.forEach(function (location) {
        new google.maps.Marker({
            position: { lat: location.lat, lng: location.lng },
            map: map,
            title: 'Investor Properties: ' + location.count
        });
    });
}

window.onload = initMap;
