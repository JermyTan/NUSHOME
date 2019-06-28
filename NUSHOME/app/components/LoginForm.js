import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

export default class LoginForm extends Component {
  render() {
    return (
      <View>
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
        <TouchableOpacity style={styles.buttonContainer}>
          <Text styles={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
