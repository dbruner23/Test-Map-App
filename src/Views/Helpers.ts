import Map from '@arcgis/core/Map';
import WebMap from '@arcgis/core/WebMap';
import MapView from '@arcgis/core/views/MapView';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import _isNil from 'lodash/isNil';

export const buildMap = (successCallback: () => void, errorCallback: () => void) => {
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

    if (!_isNil(map) &&
        !_isNil(view)) 
    {
        map.add(basemapLayer)
        view.when(() => {
            successCallback();
            view.goTo({
                center: [172.6306, -43.532],
                zoom: 15,
            })
        })
    } else {
        errorCallback();
    }
}