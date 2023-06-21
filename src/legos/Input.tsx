import React, { FC, useState } from 'react';
import {
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import styled from 'styled-components';

// import { Box } from '../legos/Box';
import { Text } from './Text';
import { theme } from '../utils';
import { Box } from './Box';

const TextInputStyled = styled(TextInput)`
  flex: 1;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  font-family: Helvetica;
  padding-top: 10px;
  padding-bottom: 10px;
`;

type InputType = 'underline' | 'outline';

interface Props extends TextInputProps {
  error?: string;
  label?: string;
  // labelIcon?: IconsNames;
  width?: string | number;
  type?: InputType;
}

const BORDER_OUTLINE_WIDTH = 3;

const getBorderColor = (focus: boolean, type: InputType) => {
  if (focus) {
    return 'blue';
  }
  return type === 'outline' ? 'gray' : 'navy';
};

export const Input: FC<Props> = ({
  label,
  // labelIcon,
  error,
  onBlur,
  onFocus,
  width = '100%',
  type = 'underline',
  ...props
}) => {
  const [focus, setFocus] = useState(false);
  const onFocusHandle = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(true);

    if (typeof onFocus === 'function') {
      onFocus(e);
    }
  };

  const onBlurHandle = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setFocus(false);

    if (typeof onBlur === 'function') {
      onBlur(e);
    }
  };

  const getLabel = () => {
    return (
      <>
        <Text fontSize={14} color={focus ? 'blue' : 'navy'} lineHeight={32}>
          {label ?? ''}
        </Text>

      </>
    );
  };

  return (
    <Box
      // minHeight={40}
      borderColor={getBorderColor(focus, type)}
      width={width}
      backgroundColor="white"
      paddingHorizontal={type === 'outline' ? 20 : 0}
      paddingVertical={5}
      // {...(type === 'outline'
      //   ? { borderWidth: BORDER_OUTLINE_WIDTH }
      //   : { borderBottomWidth: 1 })}
      borderRadius={type === 'outline' ? 4 : 0}
    >
      {type === 'underline' ? (
        <Box marginTop={-10} flexDirection="row" alignItems="center">
          {getLabel()}
        </Box>
      ) : null}
      <TextInputStyled
        {...props}
        onBlur={onBlurHandle}
        onFocus={onFocusHandle}
        placeholderTextColor={theme.colors.grayDark}
      />
      {error ? (
        <Box
          absolute
          bottom={-20}
          paddingHorizontal={type === 'outline' ? 20 : 0}
        >
          <Text fontSize={13} color="red">
            {error}
          </Text>
        </Box>
      ) : null}
    </Box>
  );
};
