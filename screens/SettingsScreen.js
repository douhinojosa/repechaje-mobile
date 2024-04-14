import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from "../theme/index";
import { BuildingStorefrontIcon, BanknotesIcon, ShoppingBagIcon, GlobeAsiaAustraliaIcon } from "react-native-heroicons/outline";
import { userStorage } from "../Storage";

export default function SettingsScreen() {
  const navigation = useNavigation();

  const accountItems = [
    {text: 'Actualizar Datos', icon: 'User', action: () => navigation.navigate('EditUser')},
    {text: 'Seguridad', icon: 'Lock', action: () => navigation.navigate('EditUser')}
]

  return (
    <ImageBackground source={require('../assets/images/fondo_blanco.png')} className="h-full" resizeMode="cover">
    <SafeAreaView className='h-full'>
        <View className='relative py-4 shadow-sm'>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: 'white'
          }}
          className='absolute z-10 rounded-full p-1 shadow top-5 left-6'
        >
          <Icon.ArrowLeft strokeWidth={3}  stroke={themeColors.bgColor}/>
        </TouchableOpacity>
        <View>
          <Text className=' text-center font-bold text-xl'>dhinojosa</Text>
        </View>
      </View>
      {/* Impacto */}
      <ScrollView>
            <Text className='font-bold text-sm ml-5 mt-2 mb-2'>IMPACTO</Text>
            <View className='mx-4 flex-row justify-center h-28'>
                <View style={{ backgroundColor: themeColors.bgColor }} className='mr-2 relative rounded-xl w-28 shadow-md shadow-gray-400'>
                    <TouchableOpacity >
                        <Text className='top-8 left-10'>
                            <BanknotesIcon  size={25} color='white'/>
                        </Text>
                        <Text className='top-10 left-9 text-white text-base'>12 $</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor }} className='mr-2 relative rounded-xl w-28'>
                <TouchableOpacity>
                    <Text className='top-8 left-11'>
                        <ShoppingBagIcon  size={25} color='white'/>
                    </Text>
                    <Text className='top-10 left-12 pl-1 text-white text-base'>2</Text>
                </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: themeColors.bgColor }} className='mr-2 relative rounded-xl w-28'>
                <TouchableOpacity>
                    <Text className='top-8 left-10'>
                        <GlobeAsiaAustraliaIcon  size={25} color='white'/>
                    </Text>
                    <Text className='top-10 left-9 text-white text-base'>0.2 kg</Text>
                </TouchableOpacity>
                </View>
            </View>
    
    {/* Saldo y cupones */}
    <View style={{ borderColor: themeColors.bgColor }} className='relative flex-row mt-8 mb-4 border-2 mx-4 border-gray-500 h-40 rounded-2xl'>
            <View  className='top-12 left-16 mr-2'>
                    <Text style={{ color: themeColors.bgColor }} className='text-center text-3xl font-semibold'>0.0</Text>
                    <Text style={{ color: themeColors.bgColor }} className='text-center text-base'>Saldo</Text>
            </View>
            <View  style={{ borderColor: themeColors.bgColor }} className='border-l-2 left-32 my-3 border-dashed'></View>
            <TouchableOpacity className='top-12 left-48' onPress={() => navigation.navigate('CouponsScreen')}>
                    <Text  style={{ color: themeColors.bgColor }} className='text-center text-3xl font-semibold'>2</Text>
                    <Text  style={{ color: themeColors.bgColor }} className='text-center text-base'>Cupones</Text>
            </TouchableOpacity>
    </View>
      {/* Account Settings */}
      <View className='mb-5'>
          <Text className='my-4 pl-5 font-semibold text-lg'>
            Cuenta
          </Text>
          <View className=' rounded-2xl px-3 mx-5'>
            <TouchableOpacity className='flex-row mb-2 bg-gray-50 rounded-2xl  pl-4 py-2 relative'>
                <Icon.User stroke={themeColors.bgColor} width={27} height={27} />
                <Text className='ml-8 py-1 font-semibold text-base'>Actualizar Datos</Text>
                <View className=' absolute right-3 top-2'>
                <Icon.ChevronRight className='ml-24 py-1' stroke={themeColors.bgColor} width={27} height={27} />
                </View>
            </TouchableOpacity>
            {/* <TouchableOpacity className='flex-row mb-2 bg-gray-50 rounded-2xl pl-4 py-2 relative'>
                <Icon.Lock stroke={themeColors.bgColor} width={27} height={27} />
                <Text className='ml-8 py-1 font-semibold text-base'>Seguridad</Text>
                <View className=' absolute right-3 top-2'>
                  <Icon.ChevronRight className='ml-24 py-1' stroke={themeColors.bgColor} width={27} height={27} />
                </View>
            </TouchableOpacity> */}
            <TouchableOpacity className='flex-row mb-2 bg-gray-50 rounded-2xl pl-4 py-2 relative' onPress={() => {
                userStorage.clearAll()
                navigation.navigate('Onboarding')
                }} >
                <Icon.LogOut stroke={themeColors.bgColor} width={27} height={27} />
                <Text className='ml-8 py-1 font-semibold text-base'>Logout</Text>
                <View className=' absolute right-3 top-2'>
                  <Icon.ChevronRight className='ml-24 py-1' stroke={themeColors.bgColor} width={27} height={27} />
                </View>
            </TouchableOpacity>
          </View>
      </View>
      {/* business settings */}
      <View className='mb-5'>
          <Text className='my-4 pl-5 font-semibold text-lg'>
            Comercio
          </Text>
          <View className='bg-gray-50 rounded-2xl px-3 mx-5'>
            <TouchableOpacity className='flex-row pl-4 py-2 relative'>
                <BuildingStorefrontIcon size={25} color={themeColors.bgColor} />
                <Text className='ml-8 py-1 font-semibold text-base'>Registar Comercio</Text>
                <View className=' absolute right-3 top-2'>
                <Icon.ChevronRight className='ml-24 py-1' stroke={themeColors.bgColor} width={27} height={27} />
                </View>
            </TouchableOpacity>
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground>
  )
}