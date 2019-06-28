import React, { Component } from "react";
import { View } from "react-native";
import { Container, Text } from "native-base";
import MyHeader from "../components/header";

export default class HouseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <View>
          <MyHeader navigation={this.props.navigation} />
          <Text style={{ alignSelf: "center" }}>HouseScreen</Text>
        </View>
      </Container>
    );
  }
}

module.export = HouseScreen;
