ymaps.ready(init); 
	var myMap;
	
	function init() {
	
		myMap = new ymaps.Map("map", {
			center: [50.457444, 30.367126], // Координаты центра карты
			zoom: 13 // Маштаб карты
		}); 
	
		myMap.controls.add(
			new ymaps.control.ZoomControl()  // Добавление элемента управления картой
		); 
	
		myPlacemark = new ymaps.Placemark([50.457444, 30.367126], { // Координаты метки объекта
			balloonContent: "<div class='ya_map'>Вот тут</div>" // Подсказка метки
		}, {
			preset: "twirl#redDotIcon" // Тип метки
		});
		
		myMap.geoObjects.add(myPlacemark); // Добавление метки
		myPlacemark.balloon.open(); // Открытие подсказки метки
		
	};