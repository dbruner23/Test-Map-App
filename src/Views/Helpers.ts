import Map from '@arcgis/core/Map';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import { ClassBreaksRenderer } from '@arcgis/core/renderers';
import SimpleFillSymbol from '@arcgis/core/symbols/SimpleFillSymbol';
import BasemapToggle from '@arcgis/core/widgets/BasemapToggle';
import Compass from '@arcgis/core/widgets/Compass';
import Home from '@arcgis/core/widgets/Home';
import LayerList from '@arcgis/core/widgets/LayerList';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import Legend from '@arcgis/core/widgets/Legend';
import _isNil from 'lodash/isNil';
import colorbrewer from 'colorbrewer';

export const buildMap = (successCallback: () => void, errorCallback: () => void, colorscale: string[]) => {
    const basemapLayer = new VectorTileLayer({
        url: "https://tiles.arcgis.com/tiles/XTtANUDT8Va4DLwI/arcgis/rest/services/nz_vector_basemap_v1/VectorTileServer"
    })

    const map = new WebMap(
        {
            // basemap: basemapLayer
        }
    )

    const view = new MapView({
        map: map,
        container: "map-container",
        center: [172.6306, -43.532],
        zoom: 15
    })

    const template = {
        title: "Parcel",
        content: [
            {
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "appellation",
                        label: "Description",
                        format: {
                            digitSeparator: true,
                            places: 0
                        }
                    },
                    {
                        fieldName: "parcel_intent",
                        label: "Intent",
                        format: {
                            digitSeparator: true,
                            places: 0
                        }
                    },
                    {
                        fieldName: "calc_area",
                        label: "Area (m2)",
                        format: {
                            digitSeparator: true,
                            places: 0
                        }
                    }
                ]
            }
        ]
    }

    const featureLayer = new FeatureLayer({
        url: "https://services.arcgis.com/xdsHIIxuCWByZiCB/ArcGIS/rest/services/LINZ_NZ_Primary_Parcels/FeatureServer/0?f=pjson",
        renderer: new ClassBreaksRenderer({
            defaultSymbol: new SimpleFillSymbol({
                color: hexToRgb(colorscale[4]),
                outline: {
                    color: [0, 0, 0, 0.5],
                    width: 1
                }
            }),
            field: "calc_area",
            classBreakInfos: [
                {
                    minValue: 0,
                    maxValue: 1000,
                    symbol: new SimpleFillSymbol({
                        color: hexToRgb(colorscale[0]),
                        outline: {
                            color: [0, 0, 0, 0.5],
                            width: 1
                        }
                    })
                },
                {
                    minValue: 1000,
                    maxValue: 5000,
                    symbol: new SimpleFillSymbol({
                        color: hexToRgb(colorscale[1]),
                        outline: {
                            color: [0, 0, 0, 0.5],
                            width: 1
                        }
                    })
                },
                {
                    minValue: 5000,
                    maxValue: 10000,
                    symbol: new SimpleFillSymbol({
                        color: hexToRgb(colorscale[2]),
                        outline: {
                            color: [0, 0, 0, 0.5],
                            width: 1
                        }
                    })
                },
                {
                    minValue: 10000,
                    maxValue: 50000,
                    symbol: new SimpleFillSymbol({
                        color: hexToRgb(colorscale[3]),
                        outline: {
                            color: [0, 0, 0, 0.5],
                            width: 1
                        }
                    })
                }
            ]
        }),
        minScale: 100000,
        popupTemplate: template
    });

    if (!_isNil(map) &&
        !_isNil(view)) 
    {
        const basemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: 'satellite'

        })

        const compass = new Compass({
            view: view
        })

        const home = new Home({
            view: view
        })

        const layerList = new LayerList({
            view: view
        })

        const legend = new Legend({
            view: view
        })

        const scaleBar = new ScaleBar({
            view: view
        })

        map.add(basemapLayer)
        map.add(featureLayer);

        view.ui.add(basemapToggle, "bottom-left")
        view.ui.add(compass, "bottom-left")
        view.ui.add(home, "bottom-left")
        view.ui.add(layerList, "top-right")
        view.ui.add(legend, "bottom-right")
        view.ui.add(scaleBar, "bottom-right")
        view.when(() => {
            setTimeout(() => successCallback(), 5000);
            view.goTo({
                center: [172.6306, -43.532],
                zoom: 14,
            })
        })
    } else {
        errorCallback();
    }
}

export const hexToRgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b, 0.5];
}

export const getColorBrewerFromString = (colorBrewerString: string) => {
    switch (colorBrewerString) {
        case 'YlGnBu':
            return colorbrewer['YlGnBu'][5]
        case 'BuGn':
            return colorbrewer['BuGn'][5]
        case 'YlOrRd':
            return colorbrewer['YlOrRd'][5]
        case 'PuRd':
            return colorbrewer['PuRd'][5]
        default:
            return colorbrewer['YlGnBu'][5]
    }
}