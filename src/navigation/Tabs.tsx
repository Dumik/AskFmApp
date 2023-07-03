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
      headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray,
      },

      tabBarShowLabel: false,

      tabBarStyle: {
        height: 50,
        backgroundColor: theme.colors.navy,
      },
    };
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,

          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <HomeIcon color={focused ? 'purple' : '#bca0dc'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Questions}
        component={QuestionsScreen}
        options={{
          tabBarShowLabel: false,

          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <QuestionsIcon color={focused ? 'purple' : '#bca0dc'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Friends}
        component={FriendsScreen}
        options={{
          tabBarShowLabel: false,

          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <FriendsIcon color={focused ? 'purple' : '#bca0dc'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Screens.Profile}
        component={ProfileScreen}
        options={{
          tabBarShowLabel: false,

          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => (
            <ProfileIcon color={focused ? 'purple' : '#bca0dc'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
