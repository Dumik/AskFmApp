import React, {FC} from 'react';

import {Text, Box, Button, Logo} from '../../legos';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
}

export const FriendsScreen: FC<ScreenProps> = ({navigation}) => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height="100%"
      backgroundColor="mainBlue">
      <Box marginBottom={100}>
        <Logo color="white" />
      </Box>
      <Box>
        <Text>Friends SCREEN</Text>
      </Box>
    </Box>
  );
};
