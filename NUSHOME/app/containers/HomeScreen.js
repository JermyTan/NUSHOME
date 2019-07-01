import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Container, Text } from "native-base";
import MyHeader from "../components/header";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <View>
          <MyHeader navigation={this.props.navigation} />
        </View>
        <View style={styles.container}>
          <Text style={styles.header}>Latest News</Text>
          <Image
            source={require("../assets/images/home_event.jpg")}
            style={styles.Event}
          />
          <Image
            source={require("../assets/images/event2.png")}
            style={styles.Event2}
          />
          <Image
            source={require("../assets/images/banner.png")}
            style={styles.Banner}
          />
        </View>
      </Container>
    );
  }
}

module.export = HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003D7C"
  },
  header: {
    fontSize: 25,
    color: "#FFFFFF",
    marginBottom: 3,
    position: "absolute",
    left: 5,
    top: "15%"
  },
  Event: {
    flex: 1,
    position: "absolute",
    height: 300,
    width: 150,
    left: "1%",
    top: "15%",
    resizeMode: "contain"
  },
  Event2: {
    flex: 1,
    position: "absolute",
    height: 300,
    width: 150,
    left: "50%",
    top: "15%",
    resizeMode: "contain"
  },
  Banner: {
    position: "absolute",
    height: 250,
    width: 325,
    left: "0%",
    bottom: "0%",
    resizeMode: "contain"
  }
});
