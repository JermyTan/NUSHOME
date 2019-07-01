import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  TextInput
} from "react-native";
import { Container, Text, Button } from "native-base";
import MyHeader from "../components/header";

export default class EventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  setModalVisible(isModalVisible) {
    this.setState({ isModalVisible: isModalVisible });
  }

  render() {
    return (
      <Container>
        <View>
          <MyHeader navigation={this.props.navigation} />
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>Events</Text>
          <Text style={styles.header2}>Sign-Ups</Text>
          <Image
            source={require("../assets/images/INS.png")}
            style={styles.event1}
          />
          <TouchableOpacity
            style={styles.signup1}
            onPress={() => this.setModalVisible(!this.state.isModalVisible)}
          >
            <Text style={styles.button1}>Sign up now!</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.isModalVisible}
        >
          <Button
            onPress={() => this.setModalVisible(!this.state.isModalVisible)}
          >
            <Text>Close</Text>
          </Button>
          <View>
            <TextInput
              placeholder="Matriculation Number"
              style={styles.input}
              returnKeyType="go"
              ref={input => (this.passwordInput = input)}
            />
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.setModalVisible(!this.state.isModalVisible)}
            >
              <Text styles={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </Container>
    );
  }
}

module.export = EventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003D7C"
  },
  event1: {
    flex: 1,
    height: 100,
    width: 350,
    left: "-5%",
    top: "3%",
    resizeMode: "contain"
  },
  logo: {
    height: 100,
    width: 100,
    position: "absolute",
    right: 3,
    top: 5
  },
  header: {
    fontSize: 35,
    color: "#FFFFFF",
    marginBottom: 3,
    position: "absolute",
    left: 5,
    top: "2%"
  },
  header2: {
    fontSize: 35,
    color: "#FFFFFF",
    marginBottom: 3,
    position: "absolute",
    left: 5,
    top: "10%"
  },
  signup1: {
    backgroundColor: "#EF7C00",
    paddingVertical: 15,
    alignItems: "center",
    width: 200,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    right: "1%",
    bottom: "10%"
  },
  button1: {
    color: "black",
    fontWeight: "700",
    fontSize: 25
  },
  event2: {
    flex: 1,
    position: "absolute",
    height: 500,
    width: 250,
    left: "10%",
    top: "30%",
    resizeMode: "contain"
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
