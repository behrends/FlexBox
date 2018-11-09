import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: 'cyan' }]} />
        <View style={[styles.box, { backgroundColor: 'magenta' }]} />
        <View style={[styles.box, { backgroundColor: 'yellow' }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    width: 100,
    height: 100
  }
});

// Jede View ist bereits ein FlexContainer und hat das FlexBox-Layout

// FlexBox-Layout - wichtige Styling-Eigenschaften:
// flexDirection legt Ausrichtung der Hauptachse fest
// flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse'
// flexDirection hat 'column' als Default
