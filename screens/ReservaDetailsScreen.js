import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { business } from "../constans/index";

export default function ReservaDetailsScreen() {
  const navigation = useNavigation();
  const comercio = business[0];
  return (
    <ImageBackground source={require('../assets/images/fondo_blanco.png')} className="h-full" resizeMode="cover">
    <SafeAreaView className=' flex-1'>
      {/* back button */}
      <View className='relative py-4 shadow-sm'>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={{
            backgroundColor: 'white'
          }}
          className='absolute z-10 rounded-full p-1 shadow top-5 left-6'
        >
          <Icon.ArrowLeft strokeWidth={3}  stroke={themeColors.bgColor}/>
        </TouchableOpacity>
        <View>
          <Text className=' text-center font-bold text-xl'>Detalle de tu pedido</Text>
          <Text className='text-center text-gray-500'>{comercio.name}</Text>
        </View>
      </View>
      {/* <View style={{
        backgroundColor: themeColors.bgColor
      }} className='flex-row px-4 mt-2 items-center'>
        <Image source={require('../assets/images/bikeGuy.png')} className='h-20 w-20 rounded-full'/>
        <Text className='flex-1 pl-2 text-white text-base'></Text>
      </View> */}

     <View className='mx-4 my-4'>
        <Text className='text-base'>Tipo de pago: <Text>Saldo en app</Text></Text>
        <Text className='text-base'>Tiempo limite: <Text>4 p.m</Text></Text>
        <Text className='text-base'>Numero de ticket: <Text>00004321</Text></Text>
      </View>

      {/* DISHES */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBotton: 50
        }} className=' pt-5'
      >
        <Text className='ml-4 mb-4 font-bold text-lg text-gray-400'>Resumen de tu pedido</Text>
        {
          comercio.dishes.map((dish, index) => {
            return (
              <View key={index}
                className=' flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-5 shadow-lg'
              >
                <Text className='font-bold text-lg' style={{color: themeColors.secudary}}>
                  1 X
                </Text>
                <Image className='h-14 w-14 rounded-full' source={dish.image} />
                <Text className='flex-1 font-bold text-gray-700'>{dish.name}</Text>
                <Text className='text-sm line-through'>${dish.price}</Text>
                <Text className='text-lg'>{dish.appPrice}</Text>
                
              </View>
            )
          })
        }
      </ScrollView>
      
      <View className='p-6 px-8  rounded-t-3xl space-y-4' style={{
        backgroundColor: themeColors.bgColor
      }}>
        <View className='flex-row justify-between'>
          <Text className=' text-white text-xl font-extrabold'>Total</Text>
          <Text className=' text-white text-lg ml-28 line-through'>$30</Text>
          <Text className=' text-white text-xl font-extrabold'>$10.97</Text>
        </View>
        {/* <View className='m-2'>
        <TouchableOpacity
          onPress={() => navigation.navigate('Preparing')}
          style={{  
            backgroundColor: themeColors.secudary
          }}
          className='p-3 rounded-full'
        >
          <Text className=' text-white text-center font-bold text-lg'>
            Reserva
          </Text>
        </TouchableOpacity>
      </View> */}
      </View>
      
    </SafeAreaView>
    </ImageBackground>
  )
}