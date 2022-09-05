let markers, map;

function initMap() {
    const position = {
        lat: -25.363,
        lng: 131.044,
    };

    mpa = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: position
    });

    markers.push(
        new google.maps.Marker({
            position: {
                lat: 19.42847, 
                lng: -99.12766
            },
            map,
            title: "Ciudad de México",
        })
    )

    markers.push(
        new google.maps.Marker({
            position: {
                lat: 20.66682, 
                lng: -103.39182
            },
            map,
            title: "Guadalajara",
        })
    )

    markers.push(
        new google.maps.Marker({
            position: {
                lat: 21.17429, 
                lng: -86.84656
            },
            map,
            title: "Guadalajara",
        })
    )
}