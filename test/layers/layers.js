var wms_layers = [];

var format_Sea_0 = new ol.format.GeoJSON();
var features_Sea_0 = format_Sea_0.readFeatures(json_Sea_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sea_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sea_0.addFeatures(features_Sea_0);
var lyr_Sea_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sea_0, 
                style: style_Sea_0,
                interactive: true,
                title: '<img src="styles/legend/Sea_0.png" /> Sea'
            });
var format_Rivers_1 = new ol.format.GeoJSON();
var features_Rivers_1 = format_Rivers_1.readFeatures(json_Rivers_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rivers_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rivers_1.addFeatures(features_Rivers_1);
var lyr_Rivers_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rivers_1, 
                style: style_Rivers_1,
                interactive: true,
                title: '<img src="styles/legend/Rivers_1.png" /> Rivers'
            });
var format_landcover_water_2 = new ol.format.GeoJSON();
var features_landcover_water_2 = format_landcover_water_2.readFeatures(json_landcover_water_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landcover_water_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landcover_water_2.addFeatures(features_landcover_water_2);
var lyr_landcover_water_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_landcover_water_2, 
                style: style_landcover_water_2,
                interactive: true,
                title: '<img src="styles/legend/landcover_water_2.png" /> landcover_water'
            });
var format_Lakes_3 = new ol.format.GeoJSON();
var features_Lakes_3 = format_Lakes_3.readFeatures(json_Lakes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lakes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lakes_3.addFeatures(features_Lakes_3);
var lyr_Lakes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lakes_3, 
                style: style_Lakes_3,
                interactive: true,
                title: '<img src="styles/legend/Lakes_3.png" /> Lakes'
            });
var format_All_daycare_centers_4 = new ol.format.GeoJSON();
var features_All_daycare_centers_4 = format_All_daycare_centers_4.readFeatures(json_All_daycare_centers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_daycare_centers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_daycare_centers_4.addFeatures(features_All_daycare_centers_4);
var lyr_All_daycare_centers_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_All_daycare_centers_4, 
                style: style_All_daycare_centers_4,
                interactive: true,
                title: '<img src="styles/legend/All_daycare_centers_4.png" /> All_daycare_centers'
            });
var format_Selected_daycare_centers_5 = new ol.format.GeoJSON();
var features_Selected_daycare_centers_5 = format_Selected_daycare_centers_5.readFeatures(json_Selected_daycare_centers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Selected_daycare_centers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selected_daycare_centers_5.addFeatures(features_Selected_daycare_centers_5);cluster_Selected_daycare_centers_5 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Selected_daycare_centers_5
});
var lyr_Selected_daycare_centers_5 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Selected_daycare_centers_5, 
                style: style_Selected_daycare_centers_5,
                interactive: true,
                title: '<img src="styles/legend/Selected_daycare_centers_5.png" /> Selected_daycare_centers'
            });

lyr_Sea_0.setVisible(true);lyr_Rivers_1.setVisible(true);lyr_landcover_water_2.setVisible(true);lyr_Lakes_3.setVisible(true);lyr_All_daycare_centers_4.setVisible(true);lyr_Selected_daycare_centers_5.setVisible(true);
var layersList = [lyr_Sea_0,lyr_Rivers_1,lyr_landcover_water_2,lyr_Lakes_3,lyr_All_daycare_centers_4,lyr_Selected_daycare_centers_5];
lyr_Sea_0.set('fieldAliases', {'mtryhm': 'mtryhm', });
lyr_Rivers_1.set('fieldAliases', {'fid': 'fid', 'maankaytto': 'maankaytto', 'mtryhm': 'mtryhm', });
lyr_landcover_water_2.set('fieldAliases', {'kohde_id': 'kohde_id', 'kunta': 'kunta', 'paaluokka': 'paaluokka', 'alaluokka': 'alaluokka', 'ryhma': 'ryhma', 'koodi': 'koodi', 'kuvaus': 'kuvaus', 'p_ala_m2': 'p_ala_m2', });
lyr_Lakes_3.set('fieldAliases', {'fid': 'fid', 'vesisto_ni': 'vesisto_ni', 'vesisto__1': 'vesisto__1', 'mtryhm': 'mtryhm', });
lyr_All_daycare_centers_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Selected_daycare_centers_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_Sea_0.set('fieldImages', {'mtryhm': 'TextEdit', });
lyr_Rivers_1.set('fieldImages', {'fid': 'TextEdit', 'maankaytto': 'TextEdit', 'mtryhm': 'TextEdit', });
lyr_landcover_water_2.set('fieldImages', {'kohde_id': 'TextEdit', 'kunta': 'TextEdit', 'paaluokka': 'TextEdit', 'alaluokka': 'TextEdit', 'ryhma': 'TextEdit', 'koodi': 'TextEdit', 'kuvaus': 'TextEdit', 'p_ala_m2': 'TextEdit', });
lyr_Lakes_3.set('fieldImages', {'fid': 'TextEdit', 'vesisto_ni': 'TextEdit', 'vesisto__1': 'TextEdit', 'mtryhm': 'TextEdit', });
lyr_All_daycare_centers_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Selected_daycare_centers_5.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_Sea_0.set('fieldLabels', {'mtryhm': 'no label', });
lyr_Rivers_1.set('fieldLabels', {'fid': 'no label', 'maankaytto': 'no label', 'mtryhm': 'no label', });
lyr_landcover_water_2.set('fieldLabels', {'kohde_id': 'no label', 'kunta': 'no label', 'paaluokka': 'no label', 'alaluokka': 'no label', 'ryhma': 'no label', 'koodi': 'no label', 'kuvaus': 'no label', 'p_ala_m2': 'no label', });
lyr_Lakes_3.set('fieldLabels', {'fid': 'no label', 'vesisto_ni': 'no label', 'vesisto__1': 'no label', 'mtryhm': 'no label', });
lyr_All_daycare_centers_4.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Selected_daycare_centers_5.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_Selected_daycare_centers_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});