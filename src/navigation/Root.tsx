import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StartingScreen, SignInScreen, SignUpScreen} from '../screens';
import {Tabs} from './Tabs';
import {RootStackParamList, Screens} from './types';


const RootStack = createNativeStackNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

export const Root = () => {

  const navigationReadyCallback = () => {
   
    return true;
  };

  return (
    <NavigationContainer ref={navigationRef} onReady={navigationReadyCallback}>
      <RootStack.Navigator initialRouteName={Screens.Starting}>
        <RootStack.Group>
          <RootStack.Screen
            component={Tabs}
            name={Screens.Tabs}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            component={StartingScreen}
            name={Screens.Starting}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            component={SignInScreen}
            name={Screens.SignIn}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            component={SignUpScreen}
            name={Screens.SignUp}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
