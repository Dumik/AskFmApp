import React, {useState} from 'react';

import {StyleSheet, View, Button, TextInput, Alert} from 'react-native';

export const AddTodo = ({onSubmit}) => {
  const [title, setTitle] = useState('');
  const pressHandler = () => {
    if (title.length >= 1) {
      onSubmit(title);
      setTitle('');
    } else {
      Alert.alert('You input is required!');
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Add todo..."
      />
      <Button
        style={styles.button}
        color="purple"
        title="Add"
        onPress={pressHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    display: 'flex',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {},
  input: {
    backgroundColor: '#eee',
    borderColor: 'purple',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    width: '85%',
    marginRight: 8,
    padding: 10,
  },
});
