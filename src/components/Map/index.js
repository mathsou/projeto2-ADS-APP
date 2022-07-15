import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import { getPixelSize } from '../../utils';
import Directions from '../Directions';

// import { Container } from './styles';

function regionFrom(lat, lon, distance) {
    distance = distance / 2
    const circumference = 40075
    const oneDegreeOfLatitudeInMeters = 111.32 * 1000
    const angularDistance = distance / circumference

    const latitudeDelta = distance / oneDegreeOfLatitudeInMeters
    const longitudeDelta = Math.abs(Math.atan2(
        Math.sin(angularDistance) * Math.cos(lat),
        Math.cos(angularDistance) - Math.sin(lat) * Math.sin(lat)))

    return {
        latitude: lat,
        longitude: lon,
        latitudeDelta,
        longitudeDelta,
    }
}

const Map = ({ destination, onDirection, onOrigin }) => {

    const map = useRef();
    const [region, setRegion] = useState(null);

    useEffect(()=>{
        (async ()=>{
            if(!region){
                await Permissions.askAsync(Permissions.LOCATION);
                const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({});
                setRegion({
                    ...regionFrom(latitude, longitude, 400)
                });
                onOrigin({latitude, longitude});
            }
        })()
    }, [])

    useEffect(()=>{
        if(destination){
            onDirection();
        }
    }, [destination]);

    return (
        <View style={styles.container}>
            <MapView
                provider={'google'}
                style={styles.map}
                region={region}
                showsMyLocationButton={false}
                showsUserLocation
                followsUserLocation
                loadingEnabled
                ref={map}
            >
                {destination && (
                    <Directions 
                        origin={region}
                        destination={destination}
                        onReady={result => {
                            map.current.fitToCoordinates(result.coordinates, {
                                edgePadding: {
                                    right: getPixelSize(10),
                                    left: getPixelSize(10),
                                    top: getPixelSize(40),
                                    bottom: getPixelSize(90),
                                }
                            })
                        }}
                    />
                 )}
            </MapView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        height: '100%',
        width: '100%'
    },
    map: {
        height: '100%',
        width: '100%',
    },
});

export default Map;