import { View, Text, Image, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PreparingScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('ReservaDetails');
        }, 3000);
    });
  return (
    <ImageBackground source={require('../assets/images/fondo_blanco.png')} className="h-full" resizeMode="cover">
    <SafeAreaView className='flex-1 items-center justify-center'>
        <Image source={require('../assets/images/delivery.gif')} className='h-80 w-80' />
        <Text className='text-xl text-gray-400 mt-4'>Reservando tu orden...</Text>
    </SafeAreaView>
    </ImageBackground>
  )
}