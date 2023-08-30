import React from 'react';
import {Box, Text} from '../../legos';

export const Header = () => {
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
        <Text color="white">Profile</Text>
        <Box>
          <Text fontSize={14}>❤️</Text>
        </Box>
      </Box>
    </Box>
  );
};
