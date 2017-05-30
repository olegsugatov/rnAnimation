import React, { Component } from 'react';
import {
  Animated,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class AnimateColors extends Component {

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
  	Animated.timing(this.animatedValue, {
  		toValue: 150,
  		duration: 1500
  	}).start();
  }

  render() {
  	const interpolateColor = this.animatedValue.interpolate({
    	inputRange: [0, 150],
    	outputRange: ['rgb(0,0,0)', 'rgb(51, 250, 170)']
    })
    const animatedStyle = {
    	backgroundColor: interpolateColor,
    	transform: [
    	{
    		translateY: this.animatedValue
    	}]
    }
    return (
      <View style={styles.container}>
      	<Animated.View style={[styles.box, animatedStyle]} />
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
    width: 50,
    height: 50
  },
  text: {
    color: "#fff"
  }
});

export default AnimateColors;
