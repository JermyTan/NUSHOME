import React, { Component } from "react";
import { View } from "react-native";
import { Container, Text } from "native-base";
import MyHeader from "../components/header";

export default class InterestGroupsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <View>
          <MyHeader navigation={this.props.navigation} />
          <Text style={{ alignSelf: "center" }}>InterestGroupsScreen</Text>
        </View>
      </Container>
    );
  }
}

module.export = InterestGroupsScreen;
