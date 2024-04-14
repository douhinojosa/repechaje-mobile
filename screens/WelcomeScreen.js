import { View, Text, SafeAreaView, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
      width: width * 1,
      height: width,
      marginVertical: 100
    }
});

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className='flex-1' style={{ backgroundColor: themeColors.bgColor }}>
        <View className='flex-1 flex justify-around mt-10'>
            <Text 
                className='text-white text-center font-bold text-4xl'
            >Empecemos!</Text>
            <View style={styles.lottie}>
                <LottieView style={{ marginTop:-40 }} source={require('../assets/images/animations/avocado.json')} autoPlay loop />
            </View>
            <View className='px-8'>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{ backgroundColor: themeColors.secudary }}
                className={`py-3 rounded-xl -mt-20`}>
                    <Text className='text-xl font-bold text-center text-white'>Ingresa</Text>
                </TouchableOpacity>
            </View>
            <View className='flex-row justify-center -mt-10'>
                <Text className='text-white font-semibold -mt-2'>No tienes una cuenta?</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SignUp')}
                >
                   <Text 
                    style={{ color: themeColors.secudary }}
                    className='font-semibold ml-1 -mt-2'>Registrate</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}