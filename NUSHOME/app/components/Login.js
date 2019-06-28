import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/images/NUSHOME_logo5.png")}
          />
          <Text style={styles.motto}>ENHANCING YOUR </Text>
          <Text style={styles.motto2}>CAMPUS LIFE</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="NUSNET ID"
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            returnKeyType="go"
            ref={input => (this.passwordInput = input)}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate("Home")}
          >
            <Text styles={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003D7C"
  },
  logo: {
    top: "5%",
    width: 200,
    height: 200,
    resizeMode: "contain"
  },
  logoContainer: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  title: {
    color: "#EF7C00",
    marginTop: 10,
    width: 160,
    textAlign: "center"
  },
  motto: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "verdana"
  },
  motto2: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: "verdana"
  },
  input: {
    height: 40,
    backgroundColor: "white",
    marginBottom: 10,
    color: "black",
    paddingHorizontal: 10,
    textAlign: "center"
  },
  buttonContainer: {
    backgroundColor: "#EF7C00",
    paddingVertical: 15,
    alignItems: "center"
  },
  buttonText: {
    color: "black",
    fontWeight: "700"
  }
});
