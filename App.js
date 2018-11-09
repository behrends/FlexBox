import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.square} />
        <View style={styles.box} />
        <View style={styles.boxUp} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1 // flex > 0 --> maximale Ausdehnung
  },
  square: {
    flex: 2,
    // flex ermöglicht Größenverhältnisse zwischen Geschwisterkomp.
    backgroundColor: 'cyan'
  },
  box: {
    flex: 3,
    backgroundColor: 'magenta'
  },
  boxUp: {
    flex: 5,
    backgroundColor: 'yellow'
  }
});
