import 'expo-dev-client';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react'
import Mapbox from '@rnmapbox/maps/';
import * as Location from "expo-location";
import { useNavigation, useRoute } from '@react-navigation/native';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";
import { featured } from "../constans/index";

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

  const getUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso para acceder a su localizacion denegado.');
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      setUserLocation(currentLocation?.coords);
  }

  const INITIAL_REGION = {
    latitude: 10.484051737155273,
    longitude: -66.87746476613049,
    latitudDelta: 0.02,
    longitudeDelta: 0.02
}

export default function MapFilterScreen() {
  const getUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permiso para acceder a su localizacion denegado.');
        return;
      }
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation?.coords);
      setUserLocation(true);
  }

  const navigation = useNavigation();
  /* const { params } = useRoute();
  console.log(params); */
  const [location, setLocation] = useState(INITIAL_REGION);
  const [userLocation, setUserLocation] = useState(false);

  return (
    <SafeAreaView style={styles.page}>
      <TouchableOpacity className='flex-row mb-4'
          onPress={() => navigation.goBack()}>
          <Icon.ArrowLeft className='mt-4 ml-4' strokeWidth={3} stroke={themeColors.bgColor} />
          <Text className='text-xl text-center pl-20 mt-3 font-bold'>Rescates Cercanos</Text>
        </TouchableOpacity>
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
         { 
          featured.restaurants.map((point, i) => {
            return (
              <Mapbox.PointAnnotation
                key={point?.id}
                id={point?.name}
                coordinate={[point?.lng, point?.lat]}
                title={point?.name}
                
              />
            )
          })
        }
      </Mapbox.MapView>
      { !userLocation ? <View style={styles.absoluteBox}>
        <TouchableOpacity style={styles.button} onPress={getUserLocation}>
          <Text style={styles.buttonText}>Utilizar ubicacion actual</Text>
        </TouchableOpacity>
      </View>
      :
      (
        <View style={styles.absoluteBox}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Aplicar</Text>
        </TouchableOpacity>
      </View>
      )
      }
    </SafeAreaView>
  )
}