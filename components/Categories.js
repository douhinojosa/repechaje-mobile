import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import { categories } from "../constans/index";

export default function Categories() {
    const [activeCat, setActiveCat] = useState(null);

  return (
    <View className="mb-8">
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            className='overflow-visible'
            contentContainerStyle={{
                paddingHorizontal: 15
            }}
        >
            {
                categories.map((category, i) => {
                    let isActive = category.id == activeCat;
                    let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
                    let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';
                      return ( <View 
                            key={i}
                            className='flex justify-center items-center mr-6'
                        >
                            <TouchableOpacity
                                onPress={() => setActiveCat(category.id)}
                                className={`p-1 rounded-full shadow bg-gray-200 ${btnClass}`}
                            >   
                                <Image
                                    source={category.image}
                                    style={{ width: 45, height: 45 }}
                                />
                            </TouchableOpacity>
                            <Text className={`text-sm ${textClass}`}>{category.name}</Text>
                        </View> )
                    }
                )
            }
        </ScrollView>
    </View>
  )
}