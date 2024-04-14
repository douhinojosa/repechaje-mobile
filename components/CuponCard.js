import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function CuponCard() {
  return (
    <View className=' bg-white shadow-lg mb-7'>
            <View className="relative px-5">
                <Image 
                    className='w-full h-56 my-auto rounded-3xl' 
                    source={require('../assets/images/dishes/cupon.jpeg')} 
                />
                <Text className='text-white text-xl absolute top-8 left-10'>
                    Apoya a una asociacion 
                </Text>
                <Text className='text-white text-xl absolute top-16 left-10'>
                    benefica de tu zona
                </Text>
                <TouchableOpacity>
                    <Text className="absolute rounded-3xl bottom-8 right-8 bg-white px-4 py-2">Donar</Text>
                </TouchableOpacity>
            </View>
            
        </View>
  )
}