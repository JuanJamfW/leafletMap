
var sitios = L.layerGroup();
	L.marker([37.228253, -3.652611]).bindPopup('Aqui es donde vivo').addTo(sitios),
	L.marker([37.230602, -3.657095]).bindPopup('Aqui esta el ayuntamiento').addTo(sitios),
	L.marker([37.227954, -3.66188]).bindPopup('Aqui esta el instituto').addTo(sitios);
	var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});
		dark  = L.tileLayer(mbUrl, {id: 'mapbox.dark',   attribution: mbAttr});
	
        var map = L.map('map', {
                center: [37.230, -3.654],
                zoom: 15,
                layers: [grayscale, sitios]
        });
        var baseLayers = {
                "Grises": grayscale,
                "Calles": streets,
                "Dark": dark
        };
        var overlays = {
                "Lugares": sitios
        };
        L.control.layers(baseLayers, overlays).addTo(map);
