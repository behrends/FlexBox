import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.box} />
        <View style={styles.boxUp}>
          <View
            style={{
              width: '100%',
              height: 30,
              backgroundColor: 'black'
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: 'cyan'
  },
  box: {
    width: '100%',
    height: 100,
    backgroundColor: 'magenta'
  },
  boxUp: {
    width: 100,
    height: '50%',
    backgroundColor: 'yellow'
  }
});
