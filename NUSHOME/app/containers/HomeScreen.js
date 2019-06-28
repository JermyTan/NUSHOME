import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
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
      </Container>
    );
  }
}

module.export = HomeScreen;
