import React, {useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TextInput,
} from 'react-native';

export const NavBar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'purple',
    paddingBottom: 10,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'capitalize',
    fontWeight: '700',
  },
});
