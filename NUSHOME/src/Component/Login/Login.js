import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView } from 'react-native';
import LoginForm from "./LoginForm";
export default class Login extends React.Component {
    render() {
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require("../../../images/NUSHOME_logo5.png")} />
                    <Text style={styles.motto}>ENHANCING YOUR </Text>
                    <Text style = {styles.motto2}>CAMPUS LIFE</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003D7C',
    },
    logo: {
        top: "5%",
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#EF7C00',
        marginTop: 10,
        width: 160,
        textAlign: 'center',
    },
    motto: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 15,
        fontFamily: "verdana",
    },
    motto2: {
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold",
        fontSize: 15,
        fontFamily: "verdana",
    },
});