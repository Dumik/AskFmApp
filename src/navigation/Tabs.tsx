import React from 'react';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {Screens} from './types';

import {
  HomeScreen,
  FriendsScreen,
  ProfileScreen,
  QuestionsScreen,
} from '../screens';
import {Box, QuestionsIcon, HomeIcon, FriendsIcon, ProfileIcon} from '../legos';
import {theme} from '../utils';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  const screenOptions = ({
    route,
  }: {
    route: RouteProp<ParamListBase, string>;
  }): BottomTabNavigationOptions => {
    return {
      tabBarIcon: ({focused}) => <Box paddingTop={19}>l</Box>,
      title: 'My home',
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        paddingTop: 15,
        top: 0,
        backgroundColor: '#f7f7f7',
        height: 100,
        borderColor: '#274C67',
      },

      tabBarItemStyle: {
        borderRadius: 10,
      },
    };
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          headerTitle: () => 'title',
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <HomeIcon
              color={focused ? '#274C67' : theme.colors.grayDark}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Questions}
        component={QuestionsScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: true,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <QuestionsIcon
              color={focused ? '#274C67' : theme.colors.grayDark}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Friends}
        component={FriendsScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <FriendsIcon
              color={focused ? '#274C67' : theme.colors.grayDark}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <ProfileIcon
              color={focused ? '#274C67' : theme.colors.grayDark}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
