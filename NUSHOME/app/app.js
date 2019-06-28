import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Container, Text } from "native-base";

import DrawerNavigator from "./managers/DrawerNavigator";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import Login from "./components/Login";

const root = createSwitchNavigator({
  Login: {
    screen: Login
  },
  default: DrawerNavigator
});

const Test = createAppContainer(root);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Test />
      </View>
    );
  }
}

module.export = App;
