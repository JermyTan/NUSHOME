import React, { Component } from "react";
import { View } from "react-native";
import { Container, Text } from "native-base";
import MyHeader from "../components/header";

export default class FAQScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <View>
          <MyHeader navigation={this.props.navigation} />
          <Text style={{ alignSelf: "center" }}>FAQScreen</Text>
        </View>
      </Container>
    );
  }
}

module.export = FAQScreen;
