import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box, { backgroundColor: 'cyan' }]} />
        <View style={[styles.box, { backgroundColor: 'magenta' }]} />
        <View style={[styles.box, { backgroundColor: 'yellow' }]} />
        <View style={[styles.box, { backgroundColor: 'black' }]} />
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
        <View style={[styles.box, { backgroundColor: 'orange' }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Ausrichtung der Hauptachse
    justifyContent: 'center', // Anordnung auf der Hauptachse
    alignItems: 'center', // Anordnung auf der Querachse
    flexWrap: 'wrap', // Umbrüche der Komponenten
    alignContent: 'center' // Anordnung auf der Querachse (bei wrap)
  },
  box: {
    width: 100,
    height: 100
  }
});

// Jede View ist bereits ein FlexContainer und hat das FlexBox-Layout

// wichtigste Eigenschaften: flexDirection, justifyContent, alignItems

// flexDirection legt Ausrichtung der Hauptachse fest
// flexDirection: 'row' | 'column' | 'row-reverse' | 'column-reverse'
// flexDirection hat 'column' als Default

// justifyContent legt Darstellung auf der Hauptachse fest
// justifyContent: 'flex-start' | 'flex-end' | 'center'
//    | 'space-around' | 'space-between' | 'space-evenly'
// justifyContent hat 'flex-start' als Default

// alignItems für Darstellung auf der Querachse (entgegen Hauptachse)
// alignItems: 'flex-start' | 'flex-end' | 'center'
// | 'stretch' | 'baseline'
// alignItems hat 'stretch' als Default

// alignSelf überschreibt Darstellung auf Querachse für eine Komponente

// flexWrap (ggf. alignContent) ermöglichen Umbrüche der Komponenten

// weitere Eigenschaften: (flexGrow, flexShrink, aspectRatio, ...)
