import { View, Text, StyleSheet, Dimensions, Button, Image } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
      width: width * 0.9,
      height: width,
      marginBottom: 0
    },
    activeDot: {
      backgroundColor: '#00a6c0',
      width: 18,
      height: 6,
      borderRadius: 4,
      bottom: 0,
      top: 5,
    },
    dot: {
      width: 6,
      height: 6,
      marginHorizontal: 3,
      borderRadius: 4,
      backgroundColor: '#EBEBEB',
      bottom:0,
      top: 5
    },

    img_repechaje: {
      width: 350,
      height: 350
    }
});

const Square = ({ selected }) => {
  return (
    <View
      style={selected ? styles.activeDot : styles.dot}
    />
  );
};

const Done = ({ ...props }) => (
  <Button
    title={'Done'}
    buttonStyle={{
      backgroundColor: '#00a6c0',
    }}
    containerViewStyle={{
      marginVertical: 10,
      width: 70,
      backgroundColor: '#00a6c0',
      borderRadius: 4
    }}
    textStyle={{ color: 'white' }}
    {...props}
  />
);

export default function OnboardingScreen() {
  const navigation = useNavigation();
  
  const handleDone = () => navigation.navigate('Welcome');

  return (
    <View style={styles.container}>
      <Onboarding containerStyles={{ color: 'white' }}
        DotComponent={Square}
        showSkip={false}
        showNext={false}
        onDone={handleDone}
        onSkip={handleDone}
        pages={[
            {
            titleStyles: { marginTop: -60, color: 'white' },
            subTitleStyles: { marginTop: -20, color: 'white' },
            backgroundColor: '#00a6c0',
            image: (<View>
              <Image source={require('../assets/repechaje_full.png')} style={styles.img_repechaje} />
              {/* <LottieView source={require('../assets/images/animations/bag.json')} autoPlay loop /> */}
            </View>),
            title: 'Cada bocado cuenta',
            subtitle: 'La segunda oportunidad de tus alimentos favoritos',
            },
            {
              titleStyles: { marginTop: -60, color: 'white' },
              subTitleStyles: { marginTop: -20, color: 'white' },
              backgroundColor: '#00a6c0',
              image: (<View style={styles.lottie}>
                <LottieView source={require('../assets/images/animations/co2.json')} autoPlay loop />
              </View>),
              title: 'Únete al movimiento',
              subtitle: 'Rescata el valor auténtico que cada comida merece',
            },
            {
              titleStyles: { marginTop: -60, color: 'white' },
              subTitleStyles: { marginTop: -20, color: 'white' },
              backgroundColor: '#00a6c0',
              image: (<View style={styles.lottie}>
                <LottieView source={require('../assets/images/animations/shopping_food_card.json')} autoPlay loop />
              </View>),
              title: 'Dale a tu comida',
              subtitle: ' La oportunidad que se merece',
              },
              {
                titleStyles: { marginTop: -60, color: 'white' },
                subTitleStyles: { marginTop: -20, color: 'white' },
                backgroundColor: '#00a6c0',
                image: (<View style={styles.lottie}>
                  <LottieView source={require('../assets/images/animations/food_cicling.json')} autoPlay loop />
                </View>),
                title: 'La oportunidad de seguir en la jugada',
                subtitle: 'Donde ningún plato se queda atrás',
              },
              {
                titleStyles: { marginTop: -60, color: 'white' },
                subTitleStyles: { marginTop: -20, color: 'white' },
                backgroundColor: '#00a6c0',
                image: (<View style={styles.lottie}>
                  <LottieView source={require('../assets/images/animations/recicle.json')} autoPlay loop />
                </View>),
                title: 'Repechaje',
                subtitle: '¡Si salvamos, Ganamos!'
              }
        ]}
    />
    </View>
  )
}