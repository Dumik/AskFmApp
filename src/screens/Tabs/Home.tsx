import React, {FC} from 'react';

import {Text, Box, Button, Logo} from '../../legos';
import {Header} from './Header';

//@ts-ignore
export const HomeScreen: FC<RootStackParamList> = ({navigation}) => {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height="100%"
      backgroundColor="white">
      <Header />
      <Box>
        <Text>HOME SCREEN</Text>
      </Box>
    </Box>
  );
};
