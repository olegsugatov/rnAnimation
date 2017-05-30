/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Animated, Easing, AppRegistry, StyleSheet, Text, View } from 'react-native';

import AnimatedBox from './src/components/AnimatedBox';
import TouchableBtn from './src/components/TouchableBtn';
import DraggableCard from './src/components/DraggableCard';
import AnimateColors from './src/components/AnimateColors';
import AnimateRotation from './src/components/AnimateRotation';

export default class rnAnimation extends Component {

  render() {
    return (
      // <AnimatedBox />
      // <TouchableBTN />
      // <DraggableCard />
      // <AnimateColors />
      <AnimateRotation />
    );
  }
}



AppRegistry.registerComponent('rnAnimation', () => rnAnimation);
