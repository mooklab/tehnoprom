coord = "[54.054606, 44.910284]"
adress = "г. Рузаевка, ул. Тимирязева, 12"
phone = "+7 (499) 381-3023"
email = "tehnoprom-m@mail.ru"

ymaps.ready(function(){
    var map = new ymaps.Map('map', {
        center: JSON.parse( coord ),
        zoom: 16,
        controls: ["zoomControl"]
    })
    var placemark = new ymaps.Placemark(JSON.parse( coord ), {
        hintContent: 'Офис продаж',
        balloonContent: `
            <span>адрес:</span>
            <strong>` + adress + `</strong>
            <span>Телефон:</span>
            <strong><a href="tel:` + phone + `">` + phone + `</a></strong>
            <span>Почта:</span>
            <strong><a href="mailto:` + email + `">` + email + `</a></strong>
        `
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/pin_filled.svg',
        iconImageSize: [50, 50],
        iconImageOffset: [-30, -45]
    });
    map.geoObjects.add(placemark);
    map.behaviors.disable('scrollZoom')
})