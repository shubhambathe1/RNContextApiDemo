// eslint-disable-next-line prettier/prettier
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const Car = (props) => (
  <View>
    <Text>Name: {props.name}</Text>
    <Text>Price: ${props.price}</Text>
    <Button style={{ width: 100, height: 45 }} color="#841584" onPress={props.incrementPrice} title="+" />
    <Button onPress={props.decrementPrice} title="-" />
  </View>
);

export default Car;
