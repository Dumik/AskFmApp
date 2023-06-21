import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import {AddTodo} from './AddTodo';
import {Todo} from './Todo';
import {NavBar} from '../../legos';

type state = Array<any>;

type UserType = {
  name: string;
  age: number;
};

type PhotoType = {
  large: string;
  small: string;
};

type ResType<D> = {
  id: number;
  mess: Array<string>;
  data: D;
};

export const TodoScreen = () => {
  const [listTodo, setListTodo] = useState<state>([]);
  const addTodo = (title: string) => {
    setListTodo(prevListTodo => [
      {
        id: Date.now().toString(),
        title,
      },
      ...prevListTodo,
    ]);
  };

  const res1: ResType<UserType> = {
    id: 1,
    mess: ['asdasd', 'asdasd'],
    data: {
      name: 'Neal',
      age: 30,
    },
  };

  const res2: ResType<PhotoType> = {
    id: 1,
    mess: ['asdasd', 'asdasd'],
    data: {
      large: 'Neal',
      small: '30',
    },
  };

  const removeTodo = id => {
    setListTodo(prevListTodo => prevListTodo.filter(todo => todo.id !== id));
  };

  return (
    <View>
      <NavBar title="todo list" />
      <AddTodo onSubmit={addTodo} />
      <FlatList
        keyExtractor={item => item.id}
        data={listTodo}
        renderItem={({item}) => (
          <Todo listTodo={item} removeTodo={removeTodo} />
        )}
        style={styles.block}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {marginBottom: 320},
});
