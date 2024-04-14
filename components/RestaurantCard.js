import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({restaurant}) {
    const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Details', {...restaurant})}
    >
        <View 
            style={{ 
                shadowColor: themeColors.bgColor, 
                shadowRadius: 7,
                marginBottom:20
            }}
            className='mr-6 bg-white rounded-3xl shadow-lg'
        >
            <View className="relative">
                <Image className='h-36 w-full rounded-t-3xl' source={restaurant.image} />
                <Text className='text-sm font-bold rounded-3xl bg-white py-1 px-2 absolute top-2 left-2'>{restaurant.disponibles} Disponible(s)</Text>
                <Text className='text-xl font-bold p-1 rounded-xl bg-white absolute bottom-2 right-2'>{restaurant.name}</Text>
            </View>
            
            <View className='px-3 pb-4 space-y-2 mt-2 '>
                <View className='flex-row items-center space-x-1'>
                    <Text className='text-lg font-bold pt-2'>{restaurant.product}</Text>
                </View>
                <View className='flex-row items-center space-x-1'>
                    <Text className='text-gray-700'>
                        Desde: 06:00 PM - 09:00 PM
                    </Text>
                </View>
                <View className='flex-row item space-x-1 relative'>
                    <Text style={{
                        color: themeColors.bgColor
                    }} className=' tex ml-1 mt-1'>{restaurant.stars}</Text>
                    <Image className='h-4 w-4 mt-1' source={require('../assets/images/fullStar.png')}/>
                    <Text className='text-gray-300'> | </Text>
                    <Text className='mt-1'>
                        <Icon.MapPin color={themeColors.bgColor} width={15} height={15}/> 
                    </Text>
                    <Text className='text-gray-700 text-xs mt-1'>0.5 km</Text>
                    <Text style={{
                        color: themeColors.bgColor
                    }} className='text-xl font-bold absolute right-1'>2,5 $</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}