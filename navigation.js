import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import UserGeoMapScreen from "./screens/UserGeoMapScreen";
import CartScreen from "./screens/CartScreen";
import ReservasScreen from "./screens/ReservasScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import CouponScreen from "./screens/CouponScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DetailsOfferScreen from "./screens/DetailsOfferScreen";
import EditUserScreen from "./screens/EditUserScreen";
import PreparingScreen from "./screens/PreparingScreen";
import PayScreen from "./screens/PayScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ReservaDetailsScreen from "./screens/ReservaDetailsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { themeColors } from "./theme";
import * as Icon from "react-native-feather";
import SeeAllScreen from "./screens/SeeAllScreen";
import MapFilterScreen from "./screens/MapFilterScreen";
import { userStorage } from "./Storage";


const Tabs = createBottomTabNavigator();

const MyTabs = () => {
    return (
              <Tabs.Navigator 
                screenOptions={{
                    tabBarStyle: {
                      height: 55,
                      paddingBottom: 0,
                      paddingTop: 15,
                      backgroundColor: '#fff',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    },
                    style: {transform: [{scaleX: -1}]},
                    headerShown: false, // Change the background color here
                  }}
              >
                  <Tabs.Screen 
                    name='Explora' 
                    component={HomeScreen} 
                    options={{
                        tabBarIcon: () => (
                            <Icon.Compass stroke={themeColors.bgColor} width={25} height={25} />
                        ),
                        tabBarLabel: () => ( 
                            <Text style={{ color: themeColors.bgColor }}></Text>
                        )
                    }}
                  />
                  <Tabs.Screen 
                    name='Coupons' 
                    component={CouponScreen} //CouponScreen
                    options={{
                        tabBarIcon: () => (
                            <Icon.Gift stroke={themeColors.bgColor} width={25} height={25} />
                        ),
                        tabBarLabel: () => ( 
                            <Text style={{ color: themeColors.bgColor }}></Text>
                        )
                    }}
                  />
                  <Tabs.Screen 
                    name="Favorite" 
                    component={FavoriteScreen} 
                    options={{
                        tabBarIcon: () => (
                            <Icon.Heart stroke={themeColors.bgColor} width={25} height={25} />
                        ),
                        tabBarLabel: () => ( 
                            <Text style={{ color: themeColors.bgColor }}></Text>
                        )
                    }}
                  />
                  <Tabs.Screen 
                    name='Reserva' 
                    component={ReservasScreen} 
                    options={{
                        tabBarIcon: () => (
                            <Icon.ShoppingBag stroke={themeColors.bgColor} width={25} height={25} />
                        ),
                        tabBarLabel: () => ( 
                            <Text style={{ color: themeColors.bgColor }}></Text>
                        )
                    }}
                  />
                  {/* <Tabs.Screen 
                    name='Profile' 
                    component={ProfileScreen} 
                    options={{
                        tabBarIcon: () => (
                            <Icon.User stroke={themeColors.bgColor} width={25} height={25} />
                        ),
                        tabBarLabel: () => ( 
                            <Text style={{ color: themeColors.bgColor }}></Text>
                        )
                    }}
                  /> */}
                  
              </Tabs.Navigator>
          )
  }

const Stack = createNativeStackNavigator();

const MyStack = () => {
    const token = userStorage.getString('token');
    let initialRoute = 'Home';
    if (token == undefined) initialRoute = 'Onboarding';
    console.log(initialRoute);
    return(
        <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={MyTabs} />
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="CouponsScreen" component={CouponScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="UserLocation" component={UserGeoMapScreen} />
            <Stack.Screen name="SeeAll" component={SeeAllScreen} />
            <Stack.Screen name="MapFilter" component={MapFilterScreen} />
            <Stack.Screen name="Details" component={DetailsOfferScreen} />
            <Stack.Screen name="Cart" options={{ presentation: 'modal' }} component={CartScreen} />
            <Stack.Screen name="Reservas" component={MyTabs} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Pay" component={PayScreen} />
            <Stack.Screen name="EditUser" component={EditUserScreen} />
            <Stack.Screen name="ReservaDetails" component={ReservaDetailsScreen} />
            <Stack.Screen name="Preparing" options={{ presentation:'fullScreenModal' }} component={PreparingScreen} />
        </Stack.Navigator>
    )
};


export default Navigation = () => {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
};

