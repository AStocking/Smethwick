var wms_layers = [];

var format_SmethwickCanals_0 = new ol.format.GeoJSON();
var features_SmethwickCanals_0 = format_SmethwickCanals_0.readFeatures(json_SmethwickCanals_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickCanals_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickCanals_0.addFeatures(features_SmethwickCanals_0);
var lyr_SmethwickCanals_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickCanals_0, 
                style: style_SmethwickCanals_0,
                popuplayertitle: 'Smethwick Canals',
                interactive: true,
                title: '<img src="styles/legend/SmethwickCanals_0.png" /> Smethwick Canals'
            });
var format_SmethwickTownGreenspace_1 = new ol.format.GeoJSON();
var features_SmethwickTownGreenspace_1 = format_SmethwickTownGreenspace_1.readFeatures(json_SmethwickTownGreenspace_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickTownGreenspace_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickTownGreenspace_1.addFeatures(features_SmethwickTownGreenspace_1);
var lyr_SmethwickTownGreenspace_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickTownGreenspace_1, 
                style: style_SmethwickTownGreenspace_1,
                popuplayertitle: 'Smethwick Town Greenspace',
                interactive: true,
                title: '<img src="styles/legend/SmethwickTownGreenspace_1.png" /> Smethwick Town Greenspace'
            });
var format_CemeterySmethwick_2 = new ol.format.GeoJSON();
var features_CemeterySmethwick_2 = format_CemeterySmethwick_2.readFeatures(json_CemeterySmethwick_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CemeterySmethwick_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CemeterySmethwick_2.addFeatures(features_CemeterySmethwick_2);
var lyr_CemeterySmethwick_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CemeterySmethwick_2, 
                style: style_CemeterySmethwick_2,
                popuplayertitle: 'Cemetery Smethwick',
                interactive: true,
                title: '<img src="styles/legend/CemeterySmethwick_2.png" /> Cemetery Smethwick'
            });
var format_SmethwickTownBuildings_3 = new ol.format.GeoJSON();
var features_SmethwickTownBuildings_3 = format_SmethwickTownBuildings_3.readFeatures(json_SmethwickTownBuildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickTownBuildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickTownBuildings_3.addFeatures(features_SmethwickTownBuildings_3);
var lyr_SmethwickTownBuildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickTownBuildings_3, 
                style: style_SmethwickTownBuildings_3,
                popuplayertitle: 'Smethwick Town Buildings',
                interactive: true,
                title: '<img src="styles/legend/SmethwickTownBuildings_3.png" /> Smethwick Town Buildings'
            });
var format_SmethwickTownCrimeJan25Jan26_4 = new ol.format.GeoJSON();
var features_SmethwickTownCrimeJan25Jan26_4 = format_SmethwickTownCrimeJan25Jan26_4.readFeatures(json_SmethwickTownCrimeJan25Jan26_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickTownCrimeJan25Jan26_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickTownCrimeJan25Jan26_4.addFeatures(features_SmethwickTownCrimeJan25Jan26_4);
var lyr_SmethwickTownCrimeJan25Jan26_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickTownCrimeJan25Jan26_4, 
                style: style_SmethwickTownCrimeJan25Jan26_4,
                popuplayertitle: 'Smethwick Town Crime Jan25-Jan26',
                interactive: true,
    title: 'Smethwick Town Crime Jan25-Jan26<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_0.png" /> Anti-social behaviour<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_1.png" /> Bicycle theft<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_2.png" /> Burglary<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_3.png" /> Criminal damage and arson<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_4.png" /> Drugs<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_5.png" /> Other crime<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_6.png" /> Other theft<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_7.png" /> Possession of weapons<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_8.png" /> Public order<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_9.png" /> Robbery<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_10.png" /> Shoplifting<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_11.png" /> Theft from the person<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_12.png" /> Vehicle crime<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_13.png" /> Violence and sexual offences<br />\
    <img src="styles/legend/SmethwickTownCrimeJan25Jan26_4_14.png" /> <br />' });
var format_SmethwickTownFlyTipping_5 = new ol.format.GeoJSON();
var features_SmethwickTownFlyTipping_5 = format_SmethwickTownFlyTipping_5.readFeatures(json_SmethwickTownFlyTipping_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickTownFlyTipping_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickTownFlyTipping_5.addFeatures(features_SmethwickTownFlyTipping_5);
var lyr_SmethwickTownFlyTipping_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickTownFlyTipping_5, 
                style: style_SmethwickTownFlyTipping_5,
                popuplayertitle: 'Smethwick Town Fly Tipping',
                interactive: true,
    title: 'Smethwick Town Fly Tipping<br />\
    <img src="styles/legend/SmethwickTownFlyTipping_5_0.png" /> Dangerous Litter<br />\
    <img src="styles/legend/SmethwickTownFlyTipping_5_1.png" /> Dog Fouling<br />\
    <img src="styles/legend/SmethwickTownFlyTipping_5_2.png" /> Fly Posting Graffitti<br />\
    <img src="styles/legend/SmethwickTownFlyTipping_5_3.png" /> Fly Tipping<br />\
    <img src="styles/legend/SmethwickTownFlyTipping_5_4.png" /> <br />' });
var format_SmethwickRoads_6 = new ol.format.GeoJSON();
var features_SmethwickRoads_6 = format_SmethwickRoads_6.readFeatures(json_SmethwickRoads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickRoads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickRoads_6.addFeatures(features_SmethwickRoads_6);
var lyr_SmethwickRoads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickRoads_6, 
                style: style_SmethwickRoads_6,
                popuplayertitle: 'Smethwick Roads',
                interactive: true,
                title: '<img src="styles/legend/SmethwickRoads_6.png" /> Smethwick Roads'
            });
var format_CommunityFacilityWorks_7 = new ol.format.GeoJSON();
var features_CommunityFacilityWorks_7 = format_CommunityFacilityWorks_7.readFeatures(json_CommunityFacilityWorks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunityFacilityWorks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunityFacilityWorks_7.addFeatures(features_CommunityFacilityWorks_7);
var lyr_CommunityFacilityWorks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunityFacilityWorks_7, 
                style: style_CommunityFacilityWorks_7,
                popuplayertitle: 'Community Facility Works',
                interactive: true,
                title: '<img src="styles/legend/CommunityFacilityWorks_7.png" /> Community Facility Works'
            });
var format_CemeteryPlannedWorks_8 = new ol.format.GeoJSON();
var features_CemeteryPlannedWorks_8 = format_CemeteryPlannedWorks_8.readFeatures(json_CemeteryPlannedWorks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CemeteryPlannedWorks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CemeteryPlannedWorks_8.addFeatures(features_CemeteryPlannedWorks_8);
var lyr_CemeteryPlannedWorks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CemeteryPlannedWorks_8, 
                style: style_CemeteryPlannedWorks_8,
                popuplayertitle: 'CemeteryPlannedWorks',
                interactive: true,
                title: '<img src="styles/legend/CemeteryPlannedWorks_8.png" /> CemeteryPlannedWorks'
            });
var format_SmethwickTown_9 = new ol.format.GeoJSON();
var features_SmethwickTown_9 = format_SmethwickTown_9.readFeatures(json_SmethwickTown_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SmethwickTown_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SmethwickTown_9.addFeatures(features_SmethwickTown_9);
var lyr_SmethwickTown_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SmethwickTown_9, 
                style: style_SmethwickTown_9,
                popuplayertitle: 'Smethwick Town',
                interactive: true,
                title: '<img src="styles/legend/SmethwickTown_9.png" /> Smethwick Town'
            });

lyr_SmethwickCanals_0.setVisible(true);lyr_SmethwickTownGreenspace_1.setVisible(true);lyr_CemeterySmethwick_2.setVisible(true);lyr_SmethwickTownBuildings_3.setVisible(true);lyr_SmethwickTownCrimeJan25Jan26_4.setVisible(true);lyr_SmethwickTownFlyTipping_5.setVisible(true);lyr_SmethwickRoads_6.setVisible(true);lyr_CommunityFacilityWorks_7.setVisible(true);lyr_CemeteryPlannedWorks_8.setVisible(true);lyr_SmethwickTown_9.setVisible(true);
var layersList = [lyr_SmethwickCanals_0,lyr_SmethwickTownGreenspace_1,lyr_CemeterySmethwick_2,lyr_SmethwickTownBuildings_3,lyr_SmethwickTownCrimeJan25Jan26_4,lyr_SmethwickTownFlyTipping_5,lyr_SmethwickRoads_6,lyr_CommunityFacilityWorks_7,lyr_CemeteryPlannedWorks_8,lyr_SmethwickTown_9];
lyr_SmethwickCanals_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SAP_NAME': 'SAP_NAME', 'SAP_PLANT_': 'SAP_PLANT_', 'SAP_PLAN_1': 'SAP_PLAN_1', 'SAP_KM_NAM': 'SAP_KM_NAM', 'SAP_CANAL_': 'SAP_CANAL_', 'SAP_FUNC_L': 'SAP_FUNC_L', 'FL_DESC': 'FL_DESC', 'Shape__Len': 'Shape__Len', 'GlobalID': 'GlobalID', });
lyr_SmethwickTownGreenspace_1.set('fieldAliases', {'toid': 'toid', 'version': 'version', 'priFunc': 'priFunc', 'secFunc': 'secFunc', 'priForm': 'priForm', 'secForm': 'secForm', });
lyr_CemeterySmethwick_2.set('fieldAliases', {'toid': 'toid', 'version': 'version', 'priFunc': 'priFunc', 'secFunc': 'secFunc', 'priForm': 'priForm', 'secForm': 'secForm', });
lyr_SmethwickTownBuildings_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'name': 'name', 'amenity': 'amenity', 'brand': 'brand', 'wheelchair': 'wheelchair', });
lyr_SmethwickTownCrimeJan25Jan26_4.set('fieldAliases', {'Crime type': 'Crime type', 'Latitude': 'Latitude', 'Location': 'Location', 'Longitude': 'Longitude', 'LSOA code': 'LSOA code', 'LSOA name': 'LSOA name', 'Month': 'Month', });
lyr_SmethwickTownFlyTipping_5.set('fieldAliases', {'completed_date': 'completed_date', 'created_date': 'created_date', 'jobstatus': 'jobstatus', 'locaddress': 'locaddress', 'maplat': 'maplat', 'maplng': 'maplng', 'proceedingtoprosec': 'proceedingtoprosec', 'Process': 'Process', 'product': 'product', 'reference': 'reference', 'servicepropertyvalue': 'servicepropertyvalue', 'severity': 'severity', 'smmaterialtype': 'smmaterialtype', 'soracist': 'soracist', 'usrn': 'usrn', 'whitespacenotes': 'whitespacenotes', });
lyr_SmethwickRoads_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'name': 'name', 'surface': 'surface', 'maxspeed': 'maxspeed', 'ref': 'ref', });
lyr_CommunityFacilityWorks_7.set('fieldAliases', {'LONGY': 'LONGY', 'LATY': 'LATY', 'Location': 'Location', 'Work': 'Work', });
lyr_CemeteryPlannedWorks_8.set('fieldAliases', {'Cemetery': 'Cemetery', 'LONGX': 'LONGX', 'LATY': 'LATY', 'Work Programmed': 'Work Programmed', });
lyr_SmethwickTown_9.set('fieldAliases', {'ID': 'ID', 'Town': 'Town', });
lyr_SmethwickCanals_0.set('fieldImages', {'OBJECTID': 'Range', 'SAP_NAME': 'TextEdit', 'SAP_PLANT_': 'TextEdit', 'SAP_PLAN_1': 'TextEdit', 'SAP_KM_NAM': 'TextEdit', 'SAP_CANAL_': 'TextEdit', 'SAP_FUNC_L': 'TextEdit', 'FL_DESC': 'TextEdit', 'Shape__Len': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_SmethwickTownGreenspace_1.set('fieldImages', {'toid': 'TextEdit', 'version': 'TextEdit', 'priFunc': 'TextEdit', 'secFunc': 'TextEdit', 'priForm': 'TextEdit', 'secForm': 'TextEdit', });
lyr_CemeterySmethwick_2.set('fieldImages', {'toid': 'TextEdit', 'version': 'TextEdit', 'priFunc': 'TextEdit', 'secFunc': 'TextEdit', 'priForm': 'TextEdit', 'secForm': 'TextEdit', });
lyr_SmethwickTownBuildings_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'name': 'TextEdit', 'amenity': 'TextEdit', 'brand': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_SmethwickTownCrimeJan25Jan26_4.set('fieldImages', {'Crime type': 'TextEdit', 'Latitude': 'TextEdit', 'Location': 'TextEdit', 'Longitude': 'TextEdit', 'LSOA code': 'TextEdit', 'LSOA name': 'TextEdit', 'Month': 'TextEdit', });
lyr_SmethwickTownFlyTipping_5.set('fieldImages', {'completed_date': 'TextEdit', 'created_date': 'TextEdit', 'jobstatus': 'TextEdit', 'locaddress': 'TextEdit', 'maplat': 'TextEdit', 'maplng': 'TextEdit', 'proceedingtoprosec': 'TextEdit', 'Process': 'TextEdit', 'product': 'TextEdit', 'reference': 'TextEdit', 'servicepropertyvalue': 'TextEdit', 'severity': 'TextEdit', 'smmaterialtype': 'TextEdit', 'soracist': 'TextEdit', 'usrn': 'TextEdit', 'whitespacenotes': 'TextEdit', });
lyr_SmethwickRoads_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'ref': 'TextEdit', });
lyr_CommunityFacilityWorks_7.set('fieldImages', {'LONGY': 'TextEdit', 'LATY': 'TextEdit', 'Location': 'TextEdit', 'Work': 'TextEdit', });
lyr_CemeteryPlannedWorks_8.set('fieldImages', {'Cemetery': 'TextEdit', 'LONGX': 'TextEdit', 'LATY': 'TextEdit', 'Work Programmed': 'TextEdit', });
lyr_SmethwickTown_9.set('fieldImages', {'ID': 'TextEdit', 'Town': 'TextEdit', });
lyr_SmethwickCanals_0.set('fieldLabels', {'OBJECTID': 'no label', 'SAP_NAME': 'no label', 'SAP_PLANT_': 'no label', 'SAP_PLAN_1': 'no label', 'SAP_KM_NAM': 'no label', 'SAP_CANAL_': 'no label', 'SAP_FUNC_L': 'no label', 'FL_DESC': 'no label', 'Shape__Len': 'no label', 'GlobalID': 'no label', });
lyr_SmethwickTownGreenspace_1.set('fieldLabels', {'toid': 'no label', 'version': 'no label', 'priFunc': 'no label', 'secFunc': 'no label', 'priForm': 'no label', 'secForm': 'no label', });
lyr_CemeterySmethwick_2.set('fieldLabels', {'toid': 'no label', 'version': 'no label', 'priFunc': 'no label', 'secFunc': 'no label', 'priForm': 'no label', 'secForm': 'no label', });
lyr_SmethwickTownBuildings_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'name': 'no label', 'amenity': 'no label', 'brand': 'no label', 'wheelchair': 'no label', });
lyr_SmethwickTownCrimeJan25Jan26_4.set('fieldLabels', {'Crime type': 'no label', 'Latitude': 'no label', 'Location': 'no label', 'Longitude': 'no label', 'LSOA code': 'no label', 'LSOA name': 'no label', 'Month': 'no label', });
lyr_SmethwickTownFlyTipping_5.set('fieldLabels', {'completed_date': 'no label', 'created_date': 'no label', 'jobstatus': 'no label', 'locaddress': 'no label', 'maplat': 'no label', 'maplng': 'no label', 'proceedingtoprosec': 'no label', 'Process': 'no label', 'product': 'no label', 'reference': 'no label', 'servicepropertyvalue': 'no label', 'severity': 'no label', 'smmaterialtype': 'no label', 'soracist': 'no label', 'usrn': 'no label', 'whitespacenotes': 'no label', });
lyr_SmethwickRoads_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'name': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'ref': 'no label', });
lyr_CommunityFacilityWorks_7.set('fieldLabels', {'LONGY': 'no label', 'LATY': 'no label', 'Location': 'no label', 'Work': 'no label', });
lyr_CemeteryPlannedWorks_8.set('fieldLabels', {'Cemetery': 'no label', 'LONGX': 'no label', 'LATY': 'no label', 'Work Programmed': 'no label', });
lyr_SmethwickTown_9.set('fieldLabels', {'ID': 'no label', 'Town': 'no label', });
lyr_SmethwickTown_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});