import React, { Component } from "react";
import { View } from "react-native";
import { Text } from "native-base";
import CardSection from "../components/CardSection";
import Button from "../components/Button";

export default class AdminHomePage extends Component {
  render() {
    return (
      <View>
        <Text>Admin Home Page</Text>
        <CardSection>
          <Button onPress={() => this.props.navigation.navigate("CreateEvent")}>
            Create new event
          </Button>
        </CardSection>
      </View>
    );
  }
}
