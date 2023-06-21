import {Text, Pressable, PressableProps} from 'react-native';
import React, {FC} from 'react';

import {Box} from '../legos';
import {ColorType, theme} from '../utils';

export interface ButtonProps extends PressableProps {
  onPress: () => void;
  width?: number | string;
  title: string;
  bgColor?: ColorType;
  type?: 'background' | 'text' | undefined;
  textDecorationLine?: 'underline' | 'none';
  colorTitle?: ColorType
}

export const Button = ({
  onPress,
  width,
  title,
  bgColor,
  type = 'background',
  textDecorationLine = 'none',
  colorTitle,
}: ButtonProps) => {
  if (type === 'text') {
    return (
      <Pressable onPress={onPress}>
        <Box width={width}>
          <Text
            style={{
              color: theme.colors[colorTitle || 'white'],
              fontSize: 16,
              fontWeight: '500',
              textDecorationStyle: 'solid',
              textDecorationLine: textDecorationLine,
            }}>
            {title}
          </Text>
        </Box>
      </Pressable>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      backgroundColor={theme.colors[bgColor || 'btnLime']}
      borderRadius={5}>
      <Box
        width={width}
        justifyContent="center"
        paddingVertical={10}
        paddingHorizontal={20}
        alignItems="center">
        <Text
          style={{
            color: theme.colors[colorTitle || 'white'],
            fontSize: 18,
            fontWeight: '700',
          }}>
          {title}
        </Text>
      </Box>
    </Pressable>
  );
};
