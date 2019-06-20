import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Platform, StyleSheet, View, Navigator, Text} from 'react-native';

class FacilitiesPage extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Facilities and Equipment booking page!</Text>
            </View>
        )
    }
}

export default FacilitiesPage;

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      right: 0,
      backgroundColor: '#0000FF',
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
    logo: {
      height: 100,
      width: 100,
      position: 'absolute',
      right: 3,
      top: 5,
    },
    body: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0000FF',
    },
    Header: {
      fontSize: 25,
      color: '#FFFFFF',
      marginBottom: 3,
      position: 'absolute',
      left: 5,
      top: "15%",
    },
    Help: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#D3D3D3',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      width: 125,
      borderRadius: 5,
      margin: 5,
      left: "18%",
      top: "60%",
    },
    ImageIconStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
    },
    SeparatorLine: {
      backgroundColor: '#fff',
      width: 1,
      height: 40,
    },
    TextStyle: {
      color: '#fff',
      marginBottom: 4,
      marginRight: 20,
    },
    Event: {
      flex: 1,
      position: "absolute",
      height: 300,
      width: 150,
      left: "1%",
      top: "15%",
      resizeMode: 'contain',
    },
    Event2: {
      flex: 1,
      position: "absolute",
      height: 300,
      width: 150,
      left: "50%",
      top: "15%",
      resizeMode: 'contain',
    },
    Banner: {
      position: "absolute",
      height: 250,
      width: 325,
      left: "0%",
      bottom: "0%",
      resizeMode: 'contain',
    },
  });