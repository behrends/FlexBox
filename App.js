import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.box} />
        <View style={styles.boxUp} />
        <View style={styles.boxUp2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  square: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  box: {
    flex: 1,
    backgroundColor: 'magenta'
  },
  boxUp: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  boxUp2: {
    flex: 1,
    backgroundColor: 'black'
  }
});
