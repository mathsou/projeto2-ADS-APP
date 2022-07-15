import React from 'react';
import { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { expo } from '../../../app.json';

const Directions = ({ destination, origin, onReady }) => {
    return (<>
        <MapViewDirections
            destination={destination}
            origin={origin}
            onReady={onReady}
            apikey={expo.android.config.googleMaps.apiKey}
            strokeWidth={4}
            strokeColor="#0077ff"

        />
        <Marker
            coordinate={destination}
        />
    </>
    );
}
export default Directions

