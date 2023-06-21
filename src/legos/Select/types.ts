import { BoxProps } from 'legos';
import { ColorType } from 'utils';
import { RNPickerItem } from '../../mock/types';

export interface SelectProps {
  label?: string;
  placeholder?: RNPickerItem;
  color?: ColorType;
  value?: any;
  items: RNPickerItem[];
  type?: 'underline' | 'outline';
  onChange: any;
  styleContainer?: BoxProps;
  isCenterAlignText?: boolean;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  error?: string;
}

export interface SelectPropsItems {
  label: string;
  value: string;
}
