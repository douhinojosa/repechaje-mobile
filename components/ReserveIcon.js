import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

export default function CartIcon() {
  const navigation = useNavigation();
  return (
    <View className='absolute bottom-5 w-full z-50'>
      <TouchableOpacity 
        onPress={() => navigation.navigate('Cart')}
        style={{ backgroundColor: themeColors.bgColor }}
        className='flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg'
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
    </View>
  )
}