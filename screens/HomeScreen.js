import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import Categories from "../components/Categories";
import { themeColors } from '../theme';
import { featured, business } from "../constans/index";
import FeaturedRow from "../components/FeaturedRow";
import Swiper from 'react-native-swiper';
import * as Location from "expo-location";
import CuponCard from "../components/CuponCard";
import BusinessCard from '../components/BusinessCard';
import { userStorage } from "../Storage";

const image = [
    {image: require('../assets/images/banner.png')},
    {image: require('../assets/images/banner2.png')},
    {image: require('../assets/images/banner3.png')},
];

const bg_image = require('../assets/images/fondo_blanco.png');

const styles = StyleSheet.create({
    /* container: {
      marginTop: 50,
      backgroundColor: Colors.lightGrey,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
      marginBottom: 5,
      paddingHorizontal: 16,
    }, */
    activeDot: {
      backgroundColor: '#00a6c0',
      width: 18,
      height: 6,
      borderRadius: 4,
      bottom: 0,
      top: 12,
    },
    image: {
      width: 400,
      height: 131,
      resizeMode: 'contain',
    },
    inActiveDot: {
      backgroundColor: '#EBEBEB',
      top: 12,
    },
    styleLogo: {
        width: 32,
        height: 29
    },
    image_bg: {
        flex: 1,
        justifyContent: 'center',
      },
  });

export default function HomeScreen() {
  const navigation = useNavigation();
  const [username, setUsername] = useState(userStorage.getString('username'));
  const [token, setToken] = useState(userStorage.getString('token'));
  const [lat, setLat] = useState(userStorage.getNumber('lat'));
  const [lon, setLon] = useState(userStorage.getNumber('lon'));
  console.log('aqui username' + username);
  console.log(token);
  console.log(lat);
  console.log(lon);
  return (
    <SafeAreaView>
         <ImageBackground source={require('../assets/images/fondo_blanco.png')} className="h-full" resizeMode="cover">
         <ScrollView className='mt-4'>
        <View className='w-full pl-5 flex-row relative mb-12'>
            <TouchableOpacity style={{ borderColor: themeColors.bgColor }} className='p-2 absolute top-0 left-4 rounded-full bg-white'>
                <Image source={require('../assets/logo.png')} style={styles.styleLogo}/>
            </TouchableOpacity>
            <Text style={{fontSize: 20, /* color: '#444262' */}} className='pl-2 pt-1 absolute top-1 left-16 text-gray-400'>Hola, dhinojosa {username}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')} className='absolute bg-white p-2 rounded-full top-0 right-6'>
                <Icon.User stroke={themeColors.bgColor} width={27} height={27} />
            </TouchableOpacity>  
        </View>
        {/* SEARCH BAR */}
        <View className="flex-row  items-center mb-1 p-4 pb-4">
            <View style={{
                borderColor: themeColors.bgColor
            }} className="flex-row flex-1 items-center bg-white rounded-full p-2 border">
                <Icon.Search height='25' width='25' stroke={themeColors.bgColor} />
                <TextInput placeholder='Salva productos cerca de ti...' className='ml-2 flex-1' />

                <TouchableOpacity onPress= {() => navigation.navigate('MapFilter')}>
                    <View className='flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300'>
                        <Icon.MapPin height='20' width='20' stroke={themeColors.bgColor} />
                        <Text /* style={{
                            color: themeColors.secudary
                        }} */ className='pr-2 text-gray-400'>
                            Explora
                        </Text>
                    </View> 
                </TouchableOpacity>
            </View>
            {/* <View style={{backgroundColor: themeColors.bgColor}} className='ml-2 p-3 rounded-full'>
                <Icon.Sliders height='20' width='20' strokeWidth={2.5} stroke='white' />
            </View> */}
        </View>

        {/* MAIN */}
        {/* Swiper */}
        <Swiper
          autoplay={true}
          height={175}
          width={700}  
          removeClippedSubviews={true}
          bounces={true}
          dotStyle={styles.inActiveDot}
          activeDot={<View style={styles.activeDot} />}
        >
        {image.map(item => (
          <Image key={image.length} style={styles.image} source={item.image} />
        ))}
        </Swiper>

        {/*  Categories  */}
        <View className='flex-row justify-between items-center px-4 mb-4'>
            <View>
                <Text className='font-bold text-lg'>Categorias</Text>
            </View>
        </View>
        <Categories />


            {/* Featured */}
            <View className='flex-row justify-between items-center px-4'>
            <View>
                <Text className='font-bold text-lg'>Rescates Cercanos</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('SeeAll', {title: 'Rescates Cercanos', filter: 'nearby'})}
            >
                <Text style={{ color: themeColors.bgColor }} className='font-semibold'>Ver Todo</Text>
            </TouchableOpacity>
            </View>
            {
                [featured].map((feat, i) => {
                    return (
                        <FeaturedRow 
                            key={i} 
                            title={feat.title}
                            restaurants={feat.restaurants}
                            description={feat.description}
                        />
                    )
                })
            }

            {/* Business Cards */}
            <View className='flex-row justify-between items-center px-4'>
            <View>
                <Text className='font-bold text-lg'>Comercios Cercanos</Text>
            </View>
            <TouchableOpacity
                /* onPress={() => navigation.navigate('SeeAll', {title: 'Comercios Cercanos', filter: 'business'})} */
            >
                <Text style={{ color: themeColors.bgColor }} className='font-semibold'>Ver Todo</Text>
            </TouchableOpacity>
            </View>
                <ScrollView className='mb-10 ml-4 py-2' horizontal scrollIndicatorInsets={false}>
                    {
                        business.map((b, i) => (
                            <BusinessCard  business={b} key={i}/>
                        ))
                    }
                </ScrollView>


            {/* Coupons Card */}
            <CuponCard />

            {/* Populares */}
            <View className='flex-row justify-between items-center px-4'>
                <View>
                    <Text className='font-bold text-lg'>Populares</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SeeAll', {title: 'Populares', filter: 'populars'})}
                >
                    <Text style={{ color: themeColors.bgColor }} className='font-semibold'>Ver Todo</Text>
                </TouchableOpacity>
            </View>
            {
                [featured].map((feat, i) => {
                    return (
                        <FeaturedRow 
                            key={i} 
                            title={feat.title}
                            restaurants={feat.restaurants}
                            description={feat.description}
                        />
                    )
                })
            }
            {/* Favoritos */}
            <View className='flex-row justify-between items-center px-4'>
                <View>
                    <Text className='font-bold text-lg'>Favoritos</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SeeAll', {title: 'Favoritos', filter: 'favoritos'})}
                >
                    <Text style={{ color: themeColors.bgColor }} className='font-semibold'>Ver Todo</Text>
                </TouchableOpacity>
            </View>
            {
                [featured].map((feat, i) => {
                    return (
                        <FeaturedRow 
                            key={i} 
                            title={feat.title}
                            restaurants={feat.restaurants}
                            description={feat.description}
                        />
                    )
                })
            }

      </ScrollView>
         </ImageBackground>
        
    </SafeAreaView>
  )
}