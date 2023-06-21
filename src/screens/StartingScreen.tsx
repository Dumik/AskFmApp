import React, {FC} from 'react';

import {Screens, RootStackParamList} from '../navigation';
import {Box, Button} from '../legos';
import {Logo} from '../legos';

//@ts-ignore
export const StartingScreen: FC<RootStackParamList> = ({navigation}) => {
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
        <Button
          onPress={() => navigation.navigate(Screens.SignIn)}
          title="Login"
          width={300}
        />
        <Box height={10} />
        <Button
          onPress={() => navigation.navigate(Screens.SignUp)}
          title="Create account"
          width={300}
          bgColor="btnBlue"
        />
      </Box>
    </Box>
  );
};
