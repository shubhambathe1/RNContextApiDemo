/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

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

import MyContext from './MyContext';
import ProductList from './ProductList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        car001: {
          name: 'Honda',
          price: 100,
        },
        car002: {
          name: 'BMW',
          price: 150,
        },
        car003: {
          name: 'Mercedes',
          price: 200,
        },
      },
    };
    // this.incrementCarPrice = this.incrementCarPrice.bind(this);
    // this.decrementCarPrice = this.decrementCarPrice.bind(this);
  }

  // incrementCarPrice = (selectedID) => {
  //   // a simple method that manipulates the state
  //   const cars = Object.assign({}, this.state.cars);
  //   cars[selectedID].price = cars[selectedID].price + 1;
  //   this.setState({
  //     cars,
  //   });
  // };

  // decrementCarPrice = (selectedID) => {
  //   // a simple method that manipulates the state
  //   const cars = Object.assign({}, this.state.cars);
  //   cars[selectedID].price = cars[selectedID].price - 1;
  //   this.setState({
  //     cars,
  //   });
  // };

  render() {
    return (
      <MyContext.Provider
        value={{
          cars: this.state.cars,
          incrementCarPrice: (selectedID) => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price + 1;
            this.setState({
              cars,
            });
          },
          decrementCarPrice: (selectedID) => {
            const cars = Object.assign({}, this.state.cars);
            cars[selectedID].price = cars[selectedID].price - 1;
            this.setState({
              cars,
            });
          },
        }}>
        <View style={styles.container}>
          <Text>Welcome to my web store</Text>
          {/* Pass props twice */}
          <ProductList
          // cars={this.state.cars}
          // incrementCarPrice={this.incrementCarPrice}
          // decrementCarPrice={this.decrementCarPrice}
          />
        </View>
      </MyContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
