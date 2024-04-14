import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";



const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    content: {
      flex: 1,
      maxHeight: 600,
    },
    lottie: {
      width: width * 1,
      height: 400
    }
});

export default function SignUp() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <SafeAreaView className='flex-1 bg-white' style={{backgroundColor: themeColors.bgColor}}>
      <View className='flex'> 
        <View className='flex-row justify-start mb-4'>
        <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className='bg-gray-50 p-2 rounded-full shadow ml-4 '>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor} />
        </TouchableOpacity>
        </View>

        <View className='flex-row justify-center mb-5'>
          <Image style={{width: 250, height: 250}} 
            source={require('../assets/repechaje_full.png')} />
        </View>
      </View>
      <View 
          className='flex bg-white px-8 pt-8 -mt-10 h-full' 
          style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        >
        <View className='form space-y-2'>
        <Text className='text-gray-700 ml-4'>Nombre de usuario</Text>
          <TextInput
            onChangeText={(value) => setUsername(value)}
            className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
            placeholder='Ingrese su nombre de usuario'

          ></TextInput>
          <Text className='text-gray-700 ml-4'>Correo Electronico</Text>
          <TextInput
            onChangeText={(value) => setEmail(value)}
            className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
            placeholder='Ingrese su correo electronico'
          ></TextInput>
          <Text className='text-gray-700 ml-4'>Contraseña</Text>
          <TextInput
            secureTextEntry
            onChangeText={(value) => setPassword(value)}
            className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-6'
            placeholder='Ingrese su contraseña'
          ></TextInput>

          <TouchableOpacity 
            onPress={() => navigation.navigate('UserLocation', {username, email, password})}
            style={{ backgroundColor: themeColors.bgColor }}
            className={`py-3 rounded-xl`}>
            <Text className='text-xl font-bold text-center text-white'>Registrate</Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-center mt-3'>
          <Text className='text-gray-700 font-semibold '>Ya tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
          >
            <Text
              style={{ color: themeColors.bgColor }} 
              className={`font-semibold ml-1`}>Ingresa</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}