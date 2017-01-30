import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Navigator
} from 'react-native';

import api from './utilities/api';


export default class fool extends Component {

constructor(props){
  super(props);
  this.state = {
    rovers: [],
    roverName:'',
    roverLaunchDate:'',
    roverLandingDate:'',
    roverStatus:'',
    roverCameras: [],
    roverCameras0: []
  }
}

componentWillMount(){
  api.getRovers().then((res) => {
    this.setState({
      rovers: res.rovers,
      roverName: res.rovers[0].name,
      roverLaunchDate: res.rovers[0].launch_date,
      roverLandingDate: res.rovers[0].landing_date,
      roverStatus: res.rovers[0].status,
      roverCameras: res.rovers[0].cameras[0].name,
      roverCameras0: res.rovers[0].cameras[0].full_name
    })
  });
}

  render() {
    console.log("Rovers: ", this.state.rovers);
    return (
      <View style={styles.container}>
      <View style={styles.logo}>
      <Image source={require('./utilities/mars-5.png')} style={{width: 31, height: 31}} />
      </View>
        <Text style={styles.title}>
          MARS 
        </Text>
        <Text style={styles.welcome}>
          Planet info from the NASA API.
        </Text>
        <Text style={styles.nasa}>
          Rover Name: {this.state.roverName}
        </Text>
        <Text style={styles.nasa}>
          Launch Date: {this.state.roverLaunchDate}
        </Text>
        <Text style={styles.nasa}>
          Landing Date: {this.state.roverLandingDate}
        </Text>
        <Text style={styles.nasa}>
          Rover Status: {this.state.roverStatus}
        </Text>
        <Text style={styles.nasa}>
          Rover Cameras: {this.state.roverCameras} : {this.state.roverCameras0}
        </Text>
         
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'snow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  nasa: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  logo: {
     
      }
  
});