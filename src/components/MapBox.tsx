import { useEffect, useRef } from 'react'
import './MapBox.css'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

function MapBox(): React.ReactNode {
    const mapRef = useRef(null)
    const MAPBOX_TOKEN = 'pk.eyJ1IjoiZ2lic29uMTIzIiwiYSI6ImNramJlY3M1ZDBqdDQzMXFxdm91aGdmdG4ifQ.cNaQnOhuDgHJxEXc_LCgIg'
    const LL = new mapboxgl.LngLat(-118.410130, 33.941580) // LAX


    useEffect(() => {
        mapboxgl.accessToken = MAPBOX_TOKEN


        //MAPBOX uses long, lat to match GeoJSON specification
        const MAPBOX = new mapboxgl.Map({
            container: mapRef.current,
            style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            center: [LL.lng, LL.lat], // starting position [lng, lat]
            zoom: 14 // starting zoom
        });
    }, [])

    return <div id="mapbox" ref={mapRef}> mapBox</div>
}

export default MapBox 