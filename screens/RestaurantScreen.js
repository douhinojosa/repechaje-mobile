import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Dish from "../components/Dish";
import CartIcon from '../components/CartIcon';
import { StarIcon, PlusIcon, MinusIcon, ShoppingBag } from 'react-native-heroicons/solid';
import { business, featured } from '../constans';
import RestaurantCard from "../components/RestaurantCard";


export default function RestaurantScreen() {
  const navigation = useNavigation()
  const { params } = useRoute();
  //console.log(params);
  return (
    <SafeAreaView className='h-full'>
      <CartIcon />
      <ImageBackground source={require('../assets/images/fondo_blanco.png')} className="h-full" resizeMode="cover">
      <ScrollView className='h-full'>
      <View className='relative'>
      <Image source={require('../assets/images/bg_image_2.jpg')} style={{
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        height: 240
      }}  className='w-full'/>
        <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className='absolute top-10 left-6 p-2 bg-gray-100 rounded-full shadow'>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor} />
          </TouchableOpacity>

          <TouchableOpacity className="absolute top-10 right-6 p-2 bg-gray-100 rounded-full shadow">
                <Icon.Heart color={themeColors.bgColor} width={25} height={25}/>
          </TouchableOpacity>
        <View className='absolute right-5 top-48'>
            <Image 
                source={params.image}
                className='h-28 w-28 rounded-full'
            />
        </View>
        </View>
        <View>
        <View className='mt-6'>
        <View className='flex-row px-3 text-gray-400'>
            <Text className='text-3xl font-semibold pr-2 text-gray-500'>{params.name}</Text>
        </View>
        <View className='flex-row items-center justify-between mt-4'>
            <View style={{
                backgroundColor: themeColors.bgColor
            }} className='flex-row items-center justify-between mx-4 rounded-3xl p-2 px-4 space-x-1 w-25 opacity-90'>
                <StarIcon size={25} color='white' />
                <Text className='text-xl font-semibold text-white'>4.7</Text>
                
            </View>
            <View className='flex-row mr-6'>
            <Text className='pr-2 text-2xl font-semibold text-gray-500'>
                <Icon.MapPin stroke={themeColors.bgColor}  width={25} height={25} /> 0.5 km
            </Text>
            </View>
        </View>
        <View className='space-y-3'>
          <View className="flex-row justify-between items-center px-4 mt-4">
              <View className="flex-row items-center space-x-1">
                <Text className="text-base text-gray-500 font-semibold opacity-60">
                  Tipo 
                </Text>
                <Text className="text-base text-gray-600 font-semibold">{params.type}</Text>
              </View>
          </View>
          
        </View>
      </View>
          <View className='mb-2'> 
              <View className='pb-10 h-full'>
                <Text className='px-4 py-2 text-2xl text-gray-600 font-bold'>Ver Ofertas</Text>
                <View className='mt-2 ml-6 mr-3'>
        {
                [featured].map((feat, i) => {
                    return (
                        feat.restaurants.map((restaurant, i) => {
                          return (
                            <RestaurantCard key={i} restaurant={restaurant}/> 
                          )
                        })
                    )
                })
        }
        </View>
              </View>
          </View>
        </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}