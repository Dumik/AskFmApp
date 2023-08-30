import React, {FC} from 'react';

import {Text, Box, Button, Logo} from '../../legos';
import {useMe} from '../../hooks/useMe';
import {Header} from './Header';
// import {getMe} from 'storage/asyncStorage';

//@ts-ignore
export const HomeScreen: FC<RootStackParamList> = ({navigation}) => {
  const {me} = useMe();
  // const isMe = getMe();
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      height="100%"
      backgroundColor="white">
      <Header />
      <Box>
        <Text>HOME SCREEN</Text>
        <Text>{me.id}</Text>
      </Box>
    </Box>
  );
};
