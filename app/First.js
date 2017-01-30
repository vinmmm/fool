import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  Navigator
} from 'react-native';



class First extends Component {
	render(){
		return(
			<View style={styles.container}>
				<Text style={styles.largeText}>The Fist View as well as a button for it.</Text>
				<TouchableHighlight style={styles.button}>
					<Text style={styles.buttonText}>Does not do anything yet.</Text>
				</TouchableHighlight>
			</View>
			)
	}
}

const styles = StyleSheet.create ({
 container: {
 	flex: 1,
 	justifyContent: 'center',
 	alignItems: 'center',
 	backgroundColor: '#dcdcdc'
 },
 largeText: {
 	flex: 1,
 	fontSize: 52,
 	fontFamily: 'HelveticaNeue-CondensedBold',
 	paddingTop: 40,
 	paddingRight: 20,
 	paddingLeft: 20,
 	color: '#ffe4e1'
 },
 button: {
 	flex: 1,
 	justifyContent: 'center',
 	alignItems: 'center',
 	alignSelf: 'stretch',
 	backgroundColor: '#f0f8ff'
 },
 buttonText: {
 	fontFamily: 'HelveticaNeue-CondensedBold',
 	color: '#fffafa'
 }
})

module.exports = First;