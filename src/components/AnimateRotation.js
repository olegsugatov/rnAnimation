import React, { Component } from 'react';
import {
  Animated,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class AnimateRotation extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 1,
      duration: 1500
    }).start();
  }

  render() {
    const interpolateRotation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
      // also radians
      // outputRange: ['0drad', '10drad'],
    })
    const animatedStyle = {
      transform: [
        { rotate: interpolateRotation }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animatedStyle]}>
          <Text style={styles.text}>Spinner</Text> 
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
    width: 150,
    height: 150,
    backgroundColor: "#333"
  },
  text: {
    color: "#fff"
  }
});

export default AnimateRotation;
