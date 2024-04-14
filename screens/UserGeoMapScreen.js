import 'expo-dev-client';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Mapbox from '@rnmapbox/maps/';
import * as Location from "expo-location";
import { useNavigation, useRoute } from '@react-navigation/native';
import { userStorage } from "../Storage";

Mapbox.setAccessToken('pk.eyJ1IjoiZGhpbm9qb3NhMjExMCIsImEiOiJjbHBsbDNybmswMTIyMnFvOTk4aWt4YXA0In0.MDthX5VboDnjtnpjaUDcnQ');

const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#fff'
    },
    map: {
      flex: 1
    },
    absoluteBox: {
      position: 'absolute',
      bottom: 20,
      width: '100%',
    },
    button: {
      backgroundColor: '#00a6c0',
      padding: 16,
      margin: 16,
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    boxIcon: {
      position: 'absolute',
      left: 15,
      top: 18,
      zIndex: 1,
    }
  });   

const INITIAL_REGION = {
    latitude: 10.491627974497316,
    longitude: -66.87720643527854,
    latitudDelta: 0.02,
    longitudeDelta: 0.02
}

export default function UserGeoMapScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [location, setLocation] = useState(INITIAL_REGION);
  const [userLocation, setUserLocation] = useState(false);
  const [data, setData] = useState(params);
  

  const getUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso para acceder a su localizacion denegado.');
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      console.log(currentLocation);
      setData(params);
      setLocation(currentLocation?.coords);
      setUserLocation(true)
  }
 
    const registerUser = async () => {
      try {
        //console.log(data);
        const response = await fetch('https://855f-37-19-221-236.ngrok-free.app/auth/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data?.email,
          password: data?.password,
          username: data?.username,
          lat: location.latitude,
          lon: location.longitude
        })
      });
      const userData = await response.json();
      console.log('aqui userdata');
      console.log(userData);
      userStorage.set('token', userData.user.token);
      userStorage.set('username', userData.user.username);
      userStorage.set('lat', Number(location.latitude));
      userStorage.set('lon', Number(location.longitude));
      
      if (userData.status == 'OK') navigation.navigate('Home');
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <View style={styles.page}>
      <Mapbox.MapView style={styles.map} styleURL={Mapbox.StyleURL.Street}> 
        <Mapbox.Camera
            zoomLevel={15}
            centerCoordinate={[location?.longitude, location?.latitude]}
            animationMode="flyTo"
            animationDuration={2000}
        />
        <Mapbox.PointAnnotation
            id="userLocation"
            coordinate={[location?.longitude, location?.latitude]}
            title="Tu ubicacion"
        />
      </Mapbox.MapView>
      { !userLocation ? <View style={styles.absoluteBox}>
        <TouchableOpacity style={styles.button} onPress={getUserLocation}>
          <Text style={styles.buttonText}>Obtener Ubicacion</Text>
        </TouchableOpacity>
      </View>
      :
      (
        <View style={styles.absoluteBox}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Guardar Ubicacion</Text>
        </TouchableOpacity>
      </View>
      )
      }
    </View>
  )
}