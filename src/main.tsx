import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {Platform, View} from 'react-native';
import {MainStack, navigationRef, RootStack} from './navigation';
import {LoadingScreen} from './screens/loadingScreen';
import {HomeScreen} from './screens/homeScreen';
import {OnboardingScreen} from './screens/onboardingScreen';
import {SomeModal} from './modals/someModal';

function ModalStackScreen() {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        mode={'modal'}
        initialRouteName={'Main'}
        screenOptions={{headerShown: false}}
        headerMode={'none'}>
        <RootStack.Screen name={'Main'} component={MainStackScreen} />
        <RootStack.Screen options={TransitionPresets.ModalPresentationIOS} name={'SomeModal'} component={SomeModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
function MainStackScreen() {
  return (
    <MainStack.Navigator
      initialRouteName={'LoadingScreen'}
      screenOptions={{
        ...Platform.select({
          android: TransitionPresets.FadeFromBottomAndroid,
          ios: TransitionPresets.DefaultTransition,
        }),
        cardStyle: {backgroundColor: 'white'},
      }}>
      <MainStack.Screen name={'LoadingScreen'} component={LoadingScreen} />
      <MainStack.Screen name={'OnboardingScreen'} component={OnboardingScreen} />
      <MainStack.Screen
        name={'HomeScreen'}
        options={{animationEnabled: false}}
        component={HomeScreen}
        initialParams={{}}
      />
    </MainStack.Navigator>
  );
}

export function MainApp() {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'black'}}>
      <ModalStackScreen />
    </View>
  );
}
