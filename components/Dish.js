import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";

export default function Dish({ dish }) {
    //console.log(dish);
  return (
    <View 
        style={{
            shadowColor: themeColors.bgColor, 
            shadowRadius: 7
        }}
        className='flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2'>
      <Image className='rounded-3xl' style={{ height: 100, width: 100 }} source={dish.image} />
      <View className='flex flex-1 space-y-3'>
        <View className='pl-3'>
            <Text className='text-xl'>{dish.name}</Text>
            <Text className='text-gray-700'>{dish.description}</Text>
        </View>
        <View className='flex-row justify-between pl-3 items-center'>
            <Text className='text-gray-700 text-lg font-bold'>
                ${dish.price}
            </Text>
            <View className='flex-row items-center'>
                <TouchableOpacity 
                    style={{ backgroundColor: themeColors.bgColor }}
                    className='p-1 rounded-full'>
                        <Icon.Minus strokeWidth={2} stroke='white' height={20} width={20} />
                </TouchableOpacity>
                <Text className='px-3'>0</Text>
                <TouchableOpacity 
                    style={{ backgroundColor: themeColors.bgColor }}
                    className='p-1 rounded-full'>
                        <Icon.Plus strokeWidth={2} stroke='white' height={20} width={20} />
                </TouchableOpacity>
            </View>
        </View>
      </View>
    </View>
  )
}