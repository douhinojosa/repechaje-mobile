import { View, Text, ScrollView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { featured } from "../constans/index";
import FeaturedRow from "../components/FeaturedRow";
import { themeColors } from '../theme';
import RestaurantCard from '../components/RestaurantCard';

export default function SeeAllScreen() {
  const navigation = useNavigation()  
  const { params } = useRoute();
  return (
    <ImageBackground source={require('../assets/images/fondo_blanco.png')} className="h-full" resizeMode="cover">
    <SafeAreaView>
      <ScrollView className='m-2'>
          <View>
              <TouchableOpacity className='flex-row'
                onPress={() => navigation.goBack()}>
                <Icon.ArrowLeft className='mt-4' strokeWidth={3} stroke={themeColors.bgColor} />
                <Text className='text-xl pl-8 mt-3 font-bold'>{params.title}</Text>
              </TouchableOpacity>
         </View>
         <View className='mt-6 ml-6 mr-3'>
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
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  )
}