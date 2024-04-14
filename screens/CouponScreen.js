import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';

const styles = StyleSheet.create({
  img_repechaje: {
    width: 350,
    height: 150
  },
  img_letras: {
    width: 45,
    height:20
  }
});

export default function CouponScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('../assets/images/fondo_blanco.png')} className="h-full" resizeMode="cover">
    <SafeAreaView>
      <View className='m-2'>
              <TouchableOpacity className='flex-row text-center'
                onPress={() => navigation.goBack()}>
                <Icon.ArrowLeft className='mt-4 ml-4' strokeWidth={3} stroke={themeColors.bgColor} />
                <Text className='text-xl pl-20 mt-3 font-bold'>Tus Cupones</Text>
              </TouchableOpacity>
         </View>

         <ScrollView className='mb-14 ml-4'>
            <TouchableOpacity>
                <Image style={styles.img_repechaje} className='relative z-0' source={require('../assets/images/cupones.png')} />
                <Text className='text-3xl font-bold rounded-3xl bg-white py-1 px-2 absolute top-9 left-8'>5$</Text>
                <Image style={styles.img_letras} className='absolute top-24 left-7 z-10' source={require('../assets/rep_letras.png')} />
                <Text className='text-md font-bold rounded-3xl bg-white py-1 px-2 absolute top-9 right-24'>UNICEF</Text>
                <Text className='text-xs mt-2 font-bold rounded-3xl text-white py-1 px-2 absolute top-16 right-14'>Por una juventud mas fuerte</Text>
                <Text className='text-md font-bold py-1 px-2 absolute top-24 mt-1 mr-2 right-20'>20/3/2024</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={styles.img_repechaje} className='relative z-0' source={require('../assets/images/cupones.png')} />
                <Text className='text-3xl font-bold rounded-3xl bg-white py-1 px-2 absolute top-9 left-8'>5$</Text>
                <Image style={styles.img_letras} className='absolute top-24 left-7 z-10' source={require('../assets/rep_letras.png')} />
                <Text className='text-md font-bold rounded-3xl bg-white py-1 px-2 absolute top-9 right-24'>UNICEF</Text>
                <Text className='text-xs mt-2 font-bold rounded-3xl text-white py-1 px-2 absolute top-16 right-14'>Por una juventud mas fuerte</Text>
                <Text className='text-md font-bold py-1 px-2 absolute top-24 mt-1 mr-2 right-20'>20/3/2024</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.img_repechaje} className='relative z-0' source={require('../assets/images/cupones.png')} />
                <Text className='text-3xl font-bold rounded-3xl bg-white py-1 px-2 absolute top-9 left-8'>5$</Text>
                <Image style={styles.img_letras} className='absolute top-24 left-7 z-10' source={require('../assets/rep_letras.png')} />
                <Text className='text-md font-bold rounded-3xl bg-white py-1 px-2 absolute top-9 right-24'>UNICEF</Text>
                <Text className='text-xs mt-2 font-bold rounded-3xl text-white py-1 px-2 absolute top-16 right-14'>Por una juventud mas fuerte</Text>
                <Text className='text-md font-bold py-1 px-2 absolute top-24 mt-1 mr-2 right-20'>20/3/2024</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Image style={styles.img_repechaje} className='relative z-0' source={require('../assets/images/cupones.png')} />
                <Text className='text-3xl font-bold rounded-3xl bg-white py-1 px-2 absolute top-9 left-8'>5$</Text>
                <Image style={styles.img_letras} className='absolute top-24 left-7 z-10' source={require('../assets/rep_letras.png')} />
                <Text className='text-md font-bold rounded-3xl bg-white py-1 px-2 absolute top-9 right-24'>UNICEF</Text>
                <Text className='text-xs mt-2 font-bold rounded-3xl text-white py-1 px-2 absolute top-16 right-14'>Por una juventud mas fuerte</Text>
                <Text className='text-md font-bold py-1 px-2 absolute top-24 mt-1 mr-2 right-20'>20/3/2024</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.img_repechaje} className='relative z-0' source={require('../assets/images/cupones.png')} />
                <Text className='text-3xl font-bold rounded-3xl bg-white py-1 px-2 absolute top-9 left-8'>5$</Text>
                <Image style={styles.img_letras} className='absolute top-24 left-7 z-10' source={require('../assets/rep_letras.png')} />
                <Text className='text-md font-bold rounded-3xl bg-white py-1 px-2 absolute top-9 right-24'>UNICEF</Text>
                <Text className='text-xs mt-2 font-bold rounded-3xl text-white py-1 px-2 absolute top-16 right-14'>Por una juventud mas fuerte</Text>
                <Text className='text-md font-bold py-1 px-2 absolute top-24 mt-1 mr-2 right-20'>20/3/2024</Text>
            </TouchableOpacity>
         </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  )
}