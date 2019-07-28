import React, { Component } from "react";
import { View, Image, Dimensions } from "react-native";
import {
  Container,
  Text,
  Header,
  Left,
  Right,
  Button,
  Icon
} from "native-base";

const WIDTH = Dimensions.get("window").width;

export default class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header transparent>
        <Left style={{ flex: 1, flexDirection: "row" }}>
          <Button
            transparent
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Icon ios="ios-menu" android="md-menu" style={{ color: "black" }} />
          </Button>
        </Left>
        <View style={{ justifyContent: "center" }}>
          <Image
            style={{
              resizeMode: "contain",
              width: WIDTH * 0.7
            }}
            source={require("../assets/images/NUSHOME_logo2.png")}
          />
        </View>
        <Right />
      </Header>
    );
  }
}

module.export = MyHeader;
