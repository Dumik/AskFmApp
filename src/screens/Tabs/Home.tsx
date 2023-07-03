import React, {FC} from 'react';

import {Text, Box, Button, Logo} from '../../legos';

//@ts-ignore
export const HomeScreen: FC<RootStackParamList> = ({navigation}) => {
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
        <Text>HOME SCREEN</Text>
      </Box>
    </Box>
  );
};
