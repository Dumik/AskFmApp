import React, {FC} from 'react';

import {Text, Box, Button} from '../../legos';
import {Header} from './Header';
import {Image, ImageBackground} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'navigation';

type ScreenNavigationProp = StackNavigationProp<RootStackParamList>;

interface ScreenProps {
  navigation: ScreenNavigationProp;
}

export const ProfileScreen: FC<ScreenProps> = ({navigation}) => {
  return (
    <Box height="100%" backgroundColor="white">
      <Header title="Profile" />
      <Box marginTop={100} height={250}>
        <ImageBackground
          source={{uri: 'https://picsum.photos/id/258/500/900'}}
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
          <Box
            style={{position: 'relative'}}
            flexDirection="row"
            justifyContent="space-between">
            <Image
              source={{uri: 'https://picsum.photos/id/200/150'}}
              style={{
                left: 10,
                bottom: -60,
                width: 120,
                height: 120,
                borderRadius: 100,
                position: 'absolute',
              }}></Image>
            <Box marginLeft={180} justifyContent="flex-end">
              <Text
                fontSize={20}
                fontWeight={700}
                style={{paddingTop: 10}}
                color="white">
                Oleg
              </Text>
              <Text fontSize={18} fontWeight={400} style={{paddingVertical: 5}}>
                @dumik
              </Text>
            </Box>
          </Box>
        </ImageBackground>
      </Box>
      <Box width={'100%'} height={70} justifyContent="center">
        <Box
          width={150}
          height={30}
          marginLeft={150}
          borderStyle="solid"
          borderColor="gray"
          borderWidth={1}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          backgroundColor="grayLight">
          <Text fontSize={16}>Followers:</Text>
          <Text fontWeight={700}>134</Text>
        </Box>
      </Box>
      <Box
        borderStyle="solid"
        borderColor="grayLight"
        borderTopWidth={2}
        borderBottomWidth={2}
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        paddingHorizontal={16}
        height={80}>
        <Box alignItems="center">
          <Text fontSize={18} fontWeight={700}>
            168
          </Text>
          <Text fontWeight={400} color="blue">
            answers
          </Text>
        </Box>
        <Box
          borderColor="grayLight"
          borderStyle="solid"
          borderLeftWidth={2}
          height={40}></Box>
        <Box alignItems="center">
          <Text fontSize={18} fontWeight={700}>
            582
          </Text>
          <Text fontWeight={400} color="blue">
            likes
          </Text>
        </Box>
        <Box
          borderColor="grayLight"
          borderStyle="solid"
          borderRightWidth={2}
          height={40}></Box>

        <Box alignItems="center">
          <Text fontSize={18} fontWeight={700}>
            0
          </Text>
          <Text fontWeight={400} color="blue">
            gifts
          </Text>
        </Box>
      </Box>
      <Box width="100%" alignItems="center" paddingTop={24}>
        <Box width="80%">
          <Button title="Ask me a Question" onPress={() => {}} />
        </Box>
      </Box>
    </Box>
  );
};
