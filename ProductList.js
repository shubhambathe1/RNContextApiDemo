// eslint-disable-next-line prettier/prettier
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Cars from './Cars';

const ProductList = (props) => (
  <View style={styles.container}>
    <Text>Product list:</Text>
    {/* Pass props twice */}
    <Cars
    // cars={props.cars}
    // incrementCarPrice={props.incrementCarPrice}
    // decrementCarPrice={props.decrementCarPrice}
    />
    {/* Other potential product categories which we will skip for this demo: */}
    {/* <Electronics /> */}
    {/* <Clothes /> */}
    {/* <Shoes /> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default ProductList;
