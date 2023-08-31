import React, { FC } from 'react';
import { Text, Box, Button, Logo } from '../../legos';
import { Header } from './Header';
import { StackNavigationProp } from '@react-navigation/stack'; // Import the appropriate type
import { RootStackParamList } from 'navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height="100%"
      backgroundColor="white"
    >
      <Header />
      <Box>
        <Text>HOME SCREEN</Text>
      </Box>
    </Box>
  );
};
