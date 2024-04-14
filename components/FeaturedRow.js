import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from "./RestaurantCard";

export default function FeaturedRow({ title, description, restaurants }) {
  return (
    <View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 15
        }}
        className='overflow-visible py-5'
      >
        {
            restaurants.map((restaurant, i) => {
                return (
                    <RestaurantCard key={i} restaurant={restaurant}/>
                )
            })
        }
      </ScrollView>
    </View>
  )
}