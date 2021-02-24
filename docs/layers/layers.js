var wms_layers = [];


        var lyr_StamenTonerBackground_0 = new ol.layer.Tile({
            'title': 'Stamen Toner Background',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://maps.stamen.com/">Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under ODbL</a>',
                url: 'http://tile.stamen.com/toner-background/{z}/{x}/{y}.png'
            })
        });
var format_All_daycare_centers_1 = new ol.format.GeoJSON();
var features_All_daycare_centers_1 = format_All_daycare_centers_1.readFeatures(json_All_daycare_centers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_daycare_centers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_daycare_centers_1.addFeatures(features_All_daycare_centers_1);
var lyr_All_daycare_centers_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_All_daycare_centers_1, 
                style: style_All_daycare_centers_1,
                interactive: true,
                title: '<img src="styles/legend/All_daycare_centers_1.png" /> All_daycare_centers'
            });
var format_Selected_daycare_centers_2 = new ol.format.GeoJSON();
var features_Selected_daycare_centers_2 = format_Selected_daycare_centers_2.readFeatures(json_Selected_daycare_centers_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Selected_daycare_centers_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selected_daycare_centers_2.addFeatures(features_Selected_daycare_centers_2);
var lyr_Selected_daycare_centers_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Selected_daycare_centers_2, 
                style: style_Selected_daycare_centers_2,
                interactive: true,
                title: '<img src="styles/legend/Selected_daycare_centers_2.png" /> Selected_daycare_centers'
            });

lyr_StamenTonerBackground_0.setVisible(true);lyr_All_daycare_centers_1.setVisible(true);lyr_Selected_daycare_centers_2.setVisible(true);
var layersList = [lyr_StamenTonerBackground_0,lyr_All_daycare_centers_1,lyr_Selected_daycare_centers_2];
lyr_All_daycare_centers_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Selected_daycare_centers_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_All_daycare_centers_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Selected_daycare_centers_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_All_daycare_centers_1.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Selected_daycare_centers_2.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Selected_daycare_centers_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});