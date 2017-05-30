import React, { Component } from 'react';
import {
  Animated,
  TouchableOpacity,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class FlipCard extends Component {

  componentWillMount() {
  	this.animatedValue = new Animated.Value(0);
  	this.value = 0;
	this.animatedValue.addListener(({ value}) => {
		this.value = value;
	})
  	this.frontInterpolate = this.animatedValue.interpolate({
  		inputRange: [0, 180],
  		outputRange: ['0deg', '180deg'],
  	})

  	this.backInterpolate = this.animatedValue.interpolate({
  		inputRange: [0, 180],
  		outputRange: ['180deg', '360deg']
  	})
  }

  flipCard() {
  	if (this.value >= 90) {
  	  Animated.spring(this.animatedValue, {
  		toValue:  0,
  		friction: 8,
  		tension: 10
  	  }).start();
  	} else {
  	  Animated.spring(this.animatedValue, {
  		toValue: 180,
  		frinction: 8,
  		tension: 10
  	  }).start();
  	}
  }

  render() {
    const frontAnimatedStyle = {
      transform: [
        { rotateY: this.frontInterpolate} 
        // { rotateX: this.frontInterpolate}   
      ]
    }
    const backAnimatedStyle = {
      transform: [
        { rotateY: this.backInterpolate}
        // { rotateX: this.backInterpolate}   
      ]
    }
    return (
      <View style={styles.container}>
      	<View>
      		<Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
      			<Text style={styles.flipText}>
      				This text is flipping on the front.
      			</Text>
      		</Animated.View>
      		<Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
      			<Text style={styles.flipText}>
      				This text is flipping on the back.
      			</Text>
      		</ Animated.View>
      	</View>
      		<TouchableOpacity style={styles.button} 
      			onPress={() => this.flipCard()}>
      			<Text>Flip!</Text>
      		</TouchableOpacity>
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
  flipCard: { 
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    backfaceVisibility: 'hidden'
  },
  flipCardBack: {
  	backgroundColor: 'red',
  	position: 'absolute',
  	top: 0
  },
  flipText: {
  	color: 'white',
  	alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    padding: 40,
    fontWeight: 'bold'
  },
  button: {
  	marginTop: 20
  }
});

export default FlipCard;
