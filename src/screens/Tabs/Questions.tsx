import React, {FC} from 'react';

import {Text, Box, Button, Logo} from '../../legos';
import { RootStackParamList } from 'navigation';
import { StackNavigationProp } from '@react-navigation/stack';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
}


export const QuestionsScreen: FC<ScreenProps> = ({navigation}) => {
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
        <Text>Questions SCREEN</Text>
      </Box>
    </Box>
  );
};
