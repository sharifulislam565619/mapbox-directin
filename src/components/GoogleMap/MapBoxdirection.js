import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import mapboxgl from 'mapbox-gl';
import React, { useEffect } from 'react';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhcmlmdWxpc2xhbTU2IiwiYSI6ImNrdXp2anJ3bzV5dXAzMHBobWo5dmY2c3QifQ.rxVlCwF1LB698k_g2Jh9Ww'

const MapBoxdirection = () => {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [73.753670, 33.147984],
            zoom: 13
        });

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    }, [])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapBoxdirection;