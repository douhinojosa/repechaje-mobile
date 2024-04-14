import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';
import { business } from "../constans/index";

export default function PayScreen() {
const navigation = useNavigation();
  const comercio = business[0];
  return (
    <ImageBackground source={require('../assets/images/fondo_blanco.png')} className="h-full" resizeMode="cover">
    <SafeAreaView className=' flex-1 h-full'>
      <View className='relative py-4 shadow-sm'>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'white'
          }}
          className='absolute z-10 rounded-full p-1 shadow top-5 left-6'
        >
          <Icon.ArrowLeft strokeWidth={3}  stroke={themeColors.bgColor}/>
        </TouchableOpacity>
        <View className='mb-1'>
          <Text className=' text-center font-bold text-xl'>Metodo de pago</Text>
        </View>
      </View>
      <View style={{
        backgroundColor: themeColors.bgColor
      }} className='flex-row px-4 mt-2 items-center h-16'>
        {/* <Image source={require('../assets/images/bikeGuy.png')} className='h-20 w-20 rounded-full'/> */}
        <Text className='flex-1 pl-2 text-white text-center text-base'>Monto a pagar a {comercio.name}: <Text className='text-xl font-semibold'>$10.97</Text></Text>
      </View>
      <View className='mt-4 mb-2'>
        <Text className='text-xl font-medium ml-6 mb-1'>Saldo disponible</Text>
        <Text className='ml-6 text-sm mr-8 text-gray-400 mb-3'>Puedes aplicar los cupones que tienes para completar el pago</Text>
        <Text className='text-3xl font-semibold ml-12 font-mono'>15.00</Text>
      </View>
      {/* payment methods */}
      <View contentContainerStyle={{
          paddingBotton: 50,
        }}   className='pt-5'>
        <Text className='text-base font-medium ml-6 mb-4'>Cancele con:</Text>
        <TouchableOpacity style={{ shadowColor: themeColors.bgColor, 
                shadowRadius: 7 }} onPress={() => navigation.navigate('Preparing')}
            className=' flex-row items-center h-16 mx-6 space-x-3 py-2 px-8 bg-white rounded-xl mb-5 shadow-lg border-0'>
                <Text className='flex-1 font-bold text-gray-700 text-xl'>Saldo en app</Text>
                <Icon.ChevronRight strokeWidth={2} height={23} width={23} stroke={themeColors.bgColor} />
        </TouchableOpacity>
        <TouchableOpacity style={{ shadowColor: themeColors.bgColor, 
                shadowRadius: 7 }} onPress={() => navigation.navigate('Preparing')}
            className=' flex-row items-center h-16 mx-6 space-x-3 py-2 px-8 bg-white rounded-xl mb-5 shadow-lg border-0'>
                <Text className='flex-1 font-bold text-gray-700 text-xl'>Pago en comercio</Text>
                <Icon.ChevronRight strokeWidth={2} height={23} width={23} stroke={themeColors.bgColor} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </ImageBackground>
  )
}