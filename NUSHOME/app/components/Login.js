import React, { Component } from "react";
import firebase from "firebase";
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loading: false
    };
    this._login = this._login.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton() {
    if (this.state.loading === true) {
      return <ActivityIndicator size="large" />;
    } else {
      return (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this._login.bind(this)}
        >
          <Text styles={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      );
    }
  }

  onLoginFail() {
    alert("Wrong email or password");
    this.setState({ loading: false });
  }

  _login() {
    let { username, password, loading } = this.state;
    username += "@u.nus.edu";
    this.setState({ loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(user => {
        if (username === "admin@u.nus.edu" && password === "password") {
          this.props.navigation.navigate("Admin");
        } else {
          this.props.navigation.navigate("Home");
        }
      })
      .catch(this.onLoginFail.bind(this));
  }

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
            onChangeText={username => this.setState({ username })}
            value={this.state.username}
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            returnKeyType="go"
            ref={input => (this.passwordInput = input)}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
          />
          <View>{this.renderButton()}</View>
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
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  buttonText: {
    color: "black",
    fontWeight: "700"
  }
});
