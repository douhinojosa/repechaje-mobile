import { View, Text, Image, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { StarIcon, PlusIcon, MinusIcon, ShoppingBag } from 'react-native-heroicons/solid';
import ReserveIcon from "../components/ReserveIcon";

import Background from "../assets/images/bg_image_1.svg";


export default function DetailsOfferScreen() {
    const navigation = useNavigation();
    const { params } = useRoute();
    console.log(params);
  return (
    <SafeAreaView className='relative h-full '>
      {/* <ReserveIcon /> */}
      <ImageBackground source={require('../assets/images/fondo_blanco.png')} className="h-full" resizeMode="cover">
      <ScrollView className='h-full mb-6'>
      <View className='relative'>
      <Image source={require('../assets/images/bg_image_6.jpg')} style={{
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        height: 240
      }}  className='w-full'/>
        <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className='absolute top-10 left-6 bg-gray-100 p-2 rounded-full shadow'>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor} />
          </TouchableOpacity>

          <TouchableOpacity className="absolute top-10 right-6 p-2 bg-gray-100 rounded-full shadow">
                <Icon.Heart color={themeColors.bgColor} width={25} height={25}/>
          </TouchableOpacity>
        <View className='absolute left-5 top-48'>
            <Image 
                source={require('../assets/images/dishes/pollo.jpeg')}
                className='h-32 w-32 rounded-full'
            />
        </View>
        </View>
        
        <View className='my-6'>
        <View className='flex-row-reverse px-3 text-gray-400'>
            <Text className='pr-2 text-3xl font-semibold text-gray-500'>
                | <Icon.MapPin stroke={themeColors.bgColor}  width={27} height={27} /> 0.5 km
            </Text>
            <Text className='text-3xl font-semibold pr-2 text-gray-500'> KFC</Text>
        </View>
        <View className='flex-row items-center justify-between mt-8'>
            <View style={{
                backgroundColor: themeColors.bgColor
            }} className='flex-row items-center justify-between mx-4 rounded-3xl p-2 px-4 space-x-1 w-25 opacity-90'>
                <StarIcon size={25} color='white' />
                <Text className='text-xl font-semibold text-white'>4.7</Text>
                
            </View>
            <View className='flex-row mr-6'>
                <Text className='text-xl text-gray-400 mr-3 line-through pt-1'>$ 10</Text>
                <Text style={{ color: themeColors.bgColor }} className='text-3xl font-bold'>$ 2.9</Text>
                </View>
        </View>
        <View className='flex-row mt-4 ml-4'>
            <Icon.Clock stroke={themeColors.bgColor}  width={27} height={27} />
            <Text className='text-lg px-2 text-gray-500'>Recogida: 3:00 - 4:00 P.M</Text>
        </View>
        <View className='mx-4  my-4 flex-row justify-between items-center'>
            <Text className='text-3xl font-semibold mr-8 text-gray-500'>
                Alitas de Pollo
            </Text>
        </View>
        <View>

        </View>
        <View className='mx-4 space-y-2 mb-4'>
            <Text className='text-lg font-semibold'>
                Contenido
            </Text>
            <Text className='text-gray-500'>
            The taste of coffee can vary depending on factors such as the type of beans, 
            roast level, brewing method, and the addition of any flavors or sweeteners.
            The taste of coffee can vary depending on factors such as the type of beans, 
            roast level, brewing method, and the addition of any flavors or sweeteners.
            The taste of coffee can vary depending on factors such as the type of beans, 
            roast level, brewing method, and the addition of any flavors or sweeteners.
            </Text>
        </View>
        <View className='space-y-3'>
          <View className='flex-row-reverse'>
            <Text className='mr-5 text-base text-gray-400'>(4) disponibles</Text>
         </View>
          <View className="flex-row justify-between items-center px-4 mb-2">
              <View className="flex-row items-center space-x-1">
                <Text className="text-base text-gray-700 font-semibold opacity-60">
                  Tipo 
                </Text>
                <Text className="text-base text-black font-semibold"> Comida Rapida</Text>
              </View>
              <View style={{ borderColor: themeColors.bgColor }}
                className="flex-row items-center space-x-4 border rounded-full p-1 ml-1 px-4">
                <TouchableOpacity>
                  <MinusIcon size={20} color={themeColors.secudary} />
                </TouchableOpacity>
                <Text className="font-extrabold text-lg">2</Text>
                <TouchableOpacity>
                  <PlusIcon size={20} color={themeColors.secudary} />
                </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Cart')}
        style={{ backgroundColor: themeColors.bgColor }}
        className='flex-row justify-between items-center mx-5 mt-4 rounded-full p-4 py-3 shadow-lg'
      >
        {/* <Text 
            className='p-2 px-4 rounded-full'
            style={{ backgroundColor: 'rgba(255,255,255,0.3)' }}
        >
            <Icon.ShoppingCart stroke='white' width={27} height={27}/>
        </Text> */}
        <Text className='flex-1 text-center pl-10 font-extrabold text-white text-lg'>
            Reservar
        </Text>
        <Text style={{
          backgroundColor: 'rgba(255,255,255,0.3)'
        }} className='font-extrabold text-white text-lg p-2 px-4 rounded-full'>
            $ 5.8
        </Text>
      </TouchableOpacity>
      
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}