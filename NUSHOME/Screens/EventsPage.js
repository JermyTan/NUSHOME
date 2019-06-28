import React, {Component} from 'react';
import { StatusBar } from 'react-native';
import {Platform, StyleSheet, View, Navigator, Text, Image, TouchableOpacity } from 'react-native';

class EventsPage extends React.Component {
    render() {
        return(
            <View style={styles.container}>
              <Image source ={require("../photo.png")} style={styles.logo}/>
              <Text style={styles.header}>Events</Text>
              <Text style={styles.header2}>Sign-Ups</Text>
              <Image source={require("../INS.png")} style={styles.event1}/>
              <TouchableOpacity style={styles.signup1}>
                <Text style={styles.button1}>Sign up now!</Text>
              </TouchableOpacity>
            </View>
        );
    }
}

export default EventsPage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#003D7C',
    },
    event1: {
      flex: 1,
      height: 100,
      width: 350,
      left: "-5%",
      top: "3%",
      resizeMode: 'contain',
    },
    logo: {
      height: 100,
      width: 100,
      position: 'absolute',
      right: 3,
      top: 5,
    },
    header: {
      fontSize: 35,
      color: '#FFFFFF',
      marginBottom: 3,
      position: 'absolute',
      left: 5,
      top: "2%",
    },
    header2: {
      fontSize: 35,
      color: '#FFFFFF',
      marginBottom: 3,
      position: 'absolute',
      left: 5,
      top: "10%",
    },
    signup1: {
      backgroundColor: '#EF7C00',
      paddingVertical: 15,
      alignItems: 'center', 
      width: 200,
      height: 50,
      borderRadius:10,
      borderWidth: 1,
      justifyContent: 'center',
      right: "1%",
      bottom: "10%",
    },
    button1: {
      color: 'black',
      fontWeight: '700',
      fontSize: 25,
    },
    event2: {
      flex: 1,
      position: "absolute",
      height: 500,
      width: 250,
      left: "10%",
      top: "30%",
      resizeMode: 'contain',
    }
  });