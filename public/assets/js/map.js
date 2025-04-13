function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 55.7558, lng: 37.6176 },  // Пример: Москва
        zoom: 10
    });

    const marker = new google.maps.Marker({
        position: { lat: 55.7558, lng: 37.6176 },
        map: map,
        title: 'Мы здесь!'
    });
}

window.initMap = initMap;
