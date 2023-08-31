import React from 'react';

import {Box, LikeIcon, Text} from '../../legos';
import { Pressable } from 'react-native';

type HeaderType = {
  isGoBack?: boolean
  title?: string
}

export const Header = ({isGoBack, title}: HeaderType) => {
  return (
    <Box
      flexDirection="row"
      paddingHorizontal={16}
      alignItems="flex-end"
      backgroundColor="primary"
      height={100}
      width="100%"
      style={{position: 'absolute', top: 0}}>
      <Box
        flexDirection="row"
        paddingHorizontal={16}
        justifyContent="space-between"
        height={40}
        width="100%">
        <Text color="white" fontSize={20}  fontWeight={700} lineHeight={30}>{title}</Text>
        <Box>
          <Pressable>
            <LikeIcon />
          </Pressable>
        </Box>
      </Box>
    </Box>
  );
};
