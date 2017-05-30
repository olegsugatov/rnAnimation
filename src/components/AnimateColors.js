import React, { Component } from 'react';
import {
  PanResponder,
  Animated,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class AnimateColors extends Component {

  render() {
    return (
      <View style={styles.container}>
      	<Animated.View style={[styles.box, animatedStyle]} {...this.panResponder.panHandlers}>
      		<Text style={styles.text}>Drag Me</Text>
      	</Animated.View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: { 
    width: 100,
    height: 100,
    backgroundColor: "#333" 
  },
  text: {
    color: "#fff"
  }
});

export default AnimateColors;
