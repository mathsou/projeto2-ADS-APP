import React, {useRef ,useEffect} from 'react';
import { View, TouchableOpacity, Image, Animated, Text, Linking } from 'react-native';
import {Feather} from '@expo/vector-icons';

import styles from './styles';


const Details = ({show, details, onClose=()=>{}}) => {
    const slide = useRef(new Animated.Value(0)).current
    
    const urlGoogle = ({origin, destination}) =>{
        const urlBase = "https://www.google.com/maps/dir/?api=1&travelmode=car&";
        return `${urlBase}origin=${origin.latitude},${origin.longitude}&destination=${destination.lat},${destination.lng}`;
    } 
    const urlWaze = ({destination}) => {
        const urlBase = "https://www.waze.com/ul?navigate=yes&zoom=17&";
        return `${urlBase}ll=${destination.lat},${destination.lng}`;
    }
    useEffect(() => {
        if(show){
            Animated.timing(
                slide,{
                    toValue: 200,
                    duration: 600
                }
            ).start();
        }
        if(!show){
            Animated.timing(
                slide,{
                    toValue: 0,
                    duration: 600
                }
            ).start();
        }
    }, [show, details])
    return (
        <Animated.View 
            style={{
                ...styles.viewBox,
                height: slide
            }}
        >
            <TouchableOpacity onPress={()=>{onClose()}}>
                <Feather name="x-circle" size={30} color="#FF0000" style={styles.close} />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => {
                        Linking.openURL(urlGoogle({
                            origin: details.origin,
                            destination: details.location
                        }));
                    }}
                >
                    <Image 
                        style={styles.buttonImage}
                        source={require('../../assets/images/google-maps-icon.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => {
                        Linking.openURL(urlWaze({
                            destination: details.location
                        }));
                    }}
                >
                    <Image 
                        style={styles.buttonImage}
                        source={require('../../assets/images/waze-icon.png')}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.groupText}>
                <Text style={styles.text}>
                    <Feather name="map-pin" size={20} color="#bb0000" style={styles.icon}></Feather>
                    {details?.formatedAddress}
                </Text>
                <Text style={styles.text}>
                    <Feather name="user" size={20} color="#bb0000" style={styles.icon}></Feather>
                    {details?.first_name} {details?.last_name}
                </Text>
                <Text style={styles.text}>
                    <Feather name="dollar-sign" size={20} color="#bb0000" style={styles.icon}></Feather>
                    {details?.delivery_charge?'R$ '+Number(details?.delivery_charge).toFixed(2).replace('.', ','):""}
                </Text>
            </View>
        </Animated.View>
    );
}

export default Details;

