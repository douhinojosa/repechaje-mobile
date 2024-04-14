import { View, Text, TouchableOpacity, Image, Dimensions, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, {useState} from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { userStorage } from "../Storage";


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

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const loginUser = async () => {
  try {
     //console.log(data);
     const response = await fetch('https://855f-37-19-221-236.ngrok-free.app/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });
    const userData = await response.json();
    console.log('aqui userdata');
    console.log(userData);
    userStorage.set('token', userData.user.token);
    userStorage.set('username', userData.user.username);
    userStorage.set('lat', Number(userData.user.lat));
    userStorage.set('lon', Number(userData.user.lon));
    
    if (userData.status == 'OK') navigation.navigate('Home');
  } catch (err) {
    console.error(err);
  }
}
  
  return (
    <SafeAreaView className='flex-1 bg-white' style={{backgroundColor: themeColors.bgColor}}>
      <View className='flex'> 
        <View className='flex-row justify-start mt-4'>
        <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className='bg-gray-50 p-2 rounded-full shadow ml-4 '>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor} />
        </TouchableOpacity>
        </View>

        <View className='flex-row justify-center mb-5 mt-5'>
          <Image style={{width: 250, height: 250}} 
            source={require('../assets/repechaje_full.png')} />
        </View>
      </View>
      <View 
          className='flex bg-white px-8 pt-8 -mt-10 pb-16 h-full' 
          style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
        >
        <View className='form space-y-2'>
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
            className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
            placeholder='Ingrese su contraseña'
          ></TextInput>

          <TouchableOpacity className='flex items-end mb-5'>
            <Text className='text-gray-700'>Olvido su contraseña</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Home')}
            style={{ backgroundColor: themeColors.bgColor }}
            className={`py-3 rounded-xl`}
          >
            <Text className='text-xl font-bold text-center text-white'>Ingresar</Text>
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-center mt-3'>
          <Text className='text-gray-700 font-semibold '>No tienes una cuenta?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
          >
             <Text 
              style={{ color: themeColors.bgColor }}
              className={`font-semibold ml-1`}>
              Registrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}