import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";
import { ReceiptPercentIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

export default function BusinessCard({business}) {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Restaurant', {...business})}>
    <View style={{
        shadowColor: themeColors.bgColor, 
        shadowRadius: 7,
        marginBottom:10,
        height:200,
        width: 200
    }} className='mr-6 mt-20 bg-white rounded-3xl shadow-lg'>
        <View style={{
            shadowColor: 'black',
            shadowRadius: 30,
            shadowOffset: {width: 0, height: 40},
            shadowOpacity: 0.8
        }} className='flex-row justify-center -mt-14'>
            <Image source={business.image} className='h-28 w-28 rounded-full'/>
        </View>
        <View className='px-5 mt-5 space-y-3'>
            <Text className='text-xl font-semibold z-10'>
                {business.name}
            </Text>
        </View>
        <View className='flex-row items-center rounded-3xl p-1 px-4 mt-2 space-x-1'>
            <Image className='h-4 w-4' source={require('../assets/images/fullStar.png')}/>
            <Text className='text-base font-bold'>{business.stars} | </Text>
            <Icon.MapPin color={themeColors.bgColor} width={15} height={15} />
            <Text className='text-base font-bold'>{business.dist} km</Text>
        </View>
        <View className='flex-row items-center space-x-1 px-4 mt-2 relative'>
            <Text className='text-base font-semibold'>{business.type}</Text>
            <TouchableOpacity className='absolute right-4'>
                <ReceiptPercentIcon size="35" strokeWidth={2} color={themeColors.bgColor} />
            </TouchableOpacity>
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}