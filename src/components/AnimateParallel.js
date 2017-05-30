import React, { Component } from 'react';
import {
  Animated,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class AnimateParallel extends Component {

  componentWillMount() {
    this.animatedValue1 = new Animated.Value(0);
    this.animatedValue2 = new Animated.Value(1);
  }

  componentDidMount() {   
    Animated.parallel([
      Animated.timing(this.animatedValue1, {
        toValue: 150,
        duration: 300
      }),
      Animated.spring(this.animatedValue2, {
        toValue: 3,
      })
    ]).start();
  }

  render() {
    const animateStyles = {
      transform: [
        { translateY: this.animatedValue1},
        { scale: this.animatedValue2}
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, animateStyles]} />
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
    width: 80,
    height: 80,
    backgroundColor: "#333"
  },
  text: {
    color: "#fff"
  }
});

export default AnimateParallel;
