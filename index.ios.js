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
import AnimateSequence from './src/components/AnimateSequence';
import AnimateStagger from './src/components/AnimateStagger';
import AnimateParallel from './src/components/AnimateParallel';
import FlipCard from './src/components/FlipCard';


export default class rnAnimation extends Component {

  render() {
    return (
      // <AnimatedBox />
      // <TouchableBTN />
      // <DraggableCard />
      // <AnimateColors />
      // <AnimateRotation />
      // <AnimateSequence />
      // <AnimateStagger />
      // <AnimateParallel />
      <FlipCard />
    );
  }
}



AppRegistry.registerComponent('rnAnimation', () => rnAnimation);
