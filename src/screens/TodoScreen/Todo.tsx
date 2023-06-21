import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import CheckBox from 'react-native-check-box';

export const Todo = ({listTodo, removeTodo}) => {
  const [isSelected, setSelection] = useState(false);
  const handlerRemove = () => {
    Alert.alert('Remove Todo', 'You really wanna remove item of  todo  list?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => removeTodo(listTodo.id),
        style: 'destructive',
      },
    ]);
  };

  return (
    <TouchableOpacity activeOpacity={0.1} onLongPress={handlerRemove}>
      <View style={styles.block}>
        <CheckBox
          onClick={() => {
            setSelection(!isSelected);
          }}
          isChecked={isSelected}
          checkBoxColor="purple"
        />
        <Text style={isSelected ? styles.titleInactive : styles.title}>
          {listTodo.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#eee',
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    color: 'red',
  },
  title: {marginLeft: 8},
  titleInactive: {
    marginLeft: 8,
    textDecorationLine: 'line-through',
    color: '#aaaaaa',
  },
});
