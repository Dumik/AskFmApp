import React from 'react';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { Screens } from './types';

import { SignInScreen, TodoScreen } from '../screens';
import { Box, TodoIcon } from '../legos';
import { theme } from '../utils';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  const screenOptions = ({
    route,
  }: {
    route: RouteProp<ParamListBase, string>;
  }): BottomTabNavigationOptions => {
    // @ts-ignore

    return {
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({ focused }) => (
        <Box paddingTop={19}>
          l
        </Box>
      ),
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
            name={Screens.TodoScreen}
            component={TodoScreen}
            options={{
              tabBarShowLabel: false,

              tabBarLabel: 'Home',
              tabBarIcon: ({color, size, focused}) => (
                <TodoIcon color={focused ? 'purple' : '#bca0dc'} size={size} />
              ),
            }}
          />
           <Tab.Screen
            name={Screens.SignIn}
            component={SignInScreen}
            options={{
              tabBarShowLabel: false,

              tabBarLabel: 'Home',
              tabBarIcon: ({color, size, focused}) => (
                <TodoIcon color={focused ? 'purple' : '#bca0dc'} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
  );
};
