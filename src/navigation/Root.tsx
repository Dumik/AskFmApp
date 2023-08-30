import React, {useEffect} from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StartingScreen, SignInScreen, SignUpScreen} from '../screens';
import {Tabs} from './Tabs';
import {RootStackParamList, Screens} from './types';
import {Text, View} from 'react-native';
// import {
//   setNavReadyWriteQuery,
//   setPasswordChangeDataWriteQuery,
// } from '../graphql/cacheQuery/functionsWitingCache';
// import { useDynamicLinks } from '../hooks/useDynamicLinks';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
export const Root = () => {
  // useDynamicLinks({
  //   callbackLoadLink(val) {
  //     // setPasswordChangeDataWriteQuery({
  //     //   dataWrite: {
  //     //     changePassword: val,
  //     //   },
  //     // });
  //   },
  //   callbackLoadLinkSleep(val) {
  //     setTimeout(() => {
  //       navigationRef.navigate(Screens.CreateNewPassword, val);
  //     }, 500);
  //   },
  // });
  const navigationReadyCallback = () => {
    // setNavReadyWriteQuery({
    //   dataWrite: { isNavReady: true },
    // });
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
