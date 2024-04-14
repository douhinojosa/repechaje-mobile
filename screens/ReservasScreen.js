import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { business } from "../constans/index";


export default function ReservasScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={require('../assets/images/fondo_blanco.png')} className="h-full" resizeMode="cover">
    <SafeAreaView className=' flex-1'>
      {/* back button */}
      <View className='relative py-4 shadow-sm'>
        {/* <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'white'
          }}
          className='absolute z-10 rounded-full p-1 shadow top-5 left-6'
        >
          <Icon.ArrowLeft strokeWidth={3}  stroke={themeColors.bgColor}/>
        </TouchableOpacity> */}
        <View>
          <Text className=' text-center font-bold text-xl'>Tus Resevas</Text>
        </View>
      </View>
      <View style={{
        backgroundColor: themeColors.bgColor
      }} className='flex-row px-4 mt-2 items-center'>
        <Image source={require('../assets/images/bikeGuy.png')} className='h-20 w-20 rounded-full'/>
        <Text className='flex-1 pl-2 text-white text-base'>Las siguientes son tus reservas activas</Text>
      </View>
      {/* DISHES */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBotton: 50
        }} className=' pt-5'
      >
        {
          business.map((b, index) => {
            return (
              <View key={index}
                className=' flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-5 shadow-lg'
              >
                <Image className='h-14 w-14 rounded-full' source={b.image} />
                <Text className='flex-1 font-bold text-gray-700'>{b.name}</Text>
                <Text className='pr-6'>$5</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ReservaDetails')}
                >
                  <Text style={{ color: themeColors.bgColor }} className='font-semibold'>Detalle</Text>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
      
    </SafeAreaView>
    </ImageBackground>
  )
}