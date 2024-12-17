var wms_layers = [];

var lyr_Fotomapa_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://mapy.geoportal.gov.pl/wss/service/PZGIK/ORTO/WMS/StandardResolution",
    attributions: ' ',
                              params: {
                                "LAYERS": "Raster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Fotomapa",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Fotomapa_0, 0]);
var lyr_a1_BDOT_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "a1_BDOT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/a1_BDOT_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1707678.108043, 6700008.716352, 1709029.048391, 6700969.646413]
                            })
                        });
var lyr_a2_BDOT_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "a2_BDOT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/a2_BDOT_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1708736.447234, 6699267.280268, 1710012.286838, 6700159.006387]
                            })
                        });
var lyr_a3_BDOT_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "a3_BDOT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/a3_BDOT_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1709721.044425, 6698543.538575, 1710998.683661, 6699430.763657]
                            })
                        });
var lyr_a4_BDOT_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "a4_BDOT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/a4_BDOT_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1710459.988936, 6697992.482039, 1711747.208963, 6698793.283533]
                            })
                        });
var lyr_a5_BDOT_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "a5_BDOT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/a5_BDOT_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1711651.269397, 6697763.462321, 1712937.982145, 6698606.833236]
                            })
                        });
var lyr_a6_BDOT_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "a6_BDOT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/a6_BDOT_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1712816.155130, 6697631.826886, 1713703.707886, 6698849.394720]
                            })
                        });
var lyr_a7_BDOT_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "a7_BDOT",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/a7_BDOT_7.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1713648.846156, 6697632.606882, 1714932.319753, 6698424.413454]
                            })
                        });
var format_Dziaki_8 = new ol.format.GeoJSON();
var features_Dziaki_8 = format_Dziaki_8.readFeatures(json_Dziaki_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dziaki_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dziaki_8.addFeatures(features_Dziaki_8);
var lyr_Dziaki_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dziaki_8, 
                style: style_Dziaki_8,
                popuplayertitle: "Działki",
                interactive: true,
                title: '<img src="styles/legend/Dziaki_8.png" /> Działki'
            });
var format_SupkiPD_9 = new ol.format.GeoJSON();
var features_SupkiPD_9 = format_SupkiPD_9.readFeatures(json_SupkiPD_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupkiPD_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupkiPD_9.addFeatures(features_SupkiPD_9);
var lyr_SupkiPD_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupkiPD_9, 
                style: style_SupkiPD_9,
                popuplayertitle: "Słupki PD",
                interactive: true,
                title: '<img src="styles/legend/SupkiPD_9.png" /> Słupki PD'
            });
var format_Punktygraniczne_10 = new ol.format.GeoJSON();
var features_Punktygraniczne_10 = format_Punktygraniczne_10.readFeatures(json_Punktygraniczne_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punktygraniczne_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punktygraniczne_10.addFeatures(features_Punktygraniczne_10);
var lyr_Punktygraniczne_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Punktygraniczne_10, 
                style: style_Punktygraniczne_10,
                popuplayertitle: "Punkty graniczne",
                interactive: true,
                title: '<img src="styles/legend/Punktygraniczne_10.png" /> Punkty graniczne'
            });

lyr_Fotomapa_0.setVisible(true);lyr_a1_BDOT_1.setVisible(true);lyr_a2_BDOT_2.setVisible(true);lyr_a3_BDOT_3.setVisible(true);lyr_a4_BDOT_4.setVisible(true);lyr_a5_BDOT_5.setVisible(true);lyr_a6_BDOT_6.setVisible(true);lyr_a7_BDOT_7.setVisible(true);lyr_Dziaki_8.setVisible(true);lyr_SupkiPD_9.setVisible(true);lyr_Punktygraniczne_10.setVisible(true);
var layersList = [lyr_Fotomapa_0,lyr_a1_BDOT_1,lyr_a2_BDOT_2,lyr_a3_BDOT_3,lyr_a4_BDOT_4,lyr_a5_BDOT_5,lyr_a6_BDOT_6,lyr_a7_BDOT_7,lyr_Dziaki_8,lyr_SupkiPD_9,lyr_Punktygraniczne_10];
lyr_Dziaki_8.set('fieldAliases', {'fid': 'fid', 'wojewodztwo': 'wojewodztwo', 'powiat': 'powiat', 'gmina': 'gmina', 'obreb': 'obreb', 'arkusz': 'arkusz', 'nr_dzialki': 'nr_dzialki', 'teryt': 'teryt', 'pow_m2': 'pow_m2', 'tysiace': 'tysiace', 'pow_ha': 'pow_ha', 'Użytek': 'Użytek', 'Numer księgi wieczystej': 'Numer księgi wieczystej', });
lyr_SupkiPD_9.set('fieldAliases', {'Nr słupka PD': 'Nr słupka PD', 'X': 'X', 'Y': 'Y', });
lyr_Punktygraniczne_10.set('fieldAliases', {'Nr punktu granicznego': 'Nr punktu granicznego', 'X': 'X', 'Y': 'Y', 'znak graniczny': 'znak graniczny', 'słupek PD': 'słupek PD', });
lyr_Dziaki_8.set('fieldImages', {'fid': 'TextEdit', 'wojewodztwo': 'TextEdit', 'powiat': 'TextEdit', 'gmina': 'TextEdit', 'obreb': 'TextEdit', 'arkusz': 'TextEdit', 'nr_dzialki': 'TextEdit', 'teryt': 'TextEdit', 'pow_m2': 'TextEdit', 'tysiace': 'Range', 'pow_ha': 'TextEdit', 'Użytek': '', 'Numer księgi wieczystej': '', });
lyr_SupkiPD_9.set('fieldImages', {'Nr słupka PD': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Punktygraniczne_10.set('fieldImages', {'Nr punktu granicznego': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'znak graniczny': 'TextEdit', 'słupek PD': 'TextEdit', });
lyr_Dziaki_8.set('fieldLabels', {'fid': 'hidden field', 'wojewodztwo': 'inline label - always visible', 'powiat': 'inline label - always visible', 'gmina': 'inline label - always visible', 'obreb': 'inline label - always visible', 'arkusz': 'hidden field', 'nr_dzialki': 'inline label - always visible', 'teryt': 'inline label - always visible', 'pow_m2': 'hidden field', 'tysiace': 'hidden field', 'pow_ha': 'inline label - always visible', 'Użytek': 'inline label - always visible', 'Numer księgi wieczystej': 'inline label - always visible', });
lyr_SupkiPD_9.set('fieldLabels', {'Nr słupka PD': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_Punktygraniczne_10.set('fieldLabels', {'Nr punktu granicznego': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'znak graniczny': 'inline label - always visible', 'słupek PD': 'inline label - always visible', });
lyr_Punktygraniczne_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});