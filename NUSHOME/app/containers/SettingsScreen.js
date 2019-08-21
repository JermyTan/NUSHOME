import React, { Component } from "react";
import { View } from "react-native";
import { Container, Text } from "native-base";
import MyHeader from "../components/header";
import Button from "../components/Button";
import CardSection from "../components/CardSection";
import Card from "../components/Card";
import { Avatar } from "react-native-elements";

export default class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //log the user out of the account
  logOut() {
    console.log("Logging out");
    this.props.navigation.navigate("Login");
  }

  render() {
    return (
      <Container>
        <View>
          <MyHeader navigation={this.props.navigation} />
        </View>
        <Card>
          <CardSection
            style={{
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Avatar
              size="xlarge"
              rounded
              title="MT"
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </CardSection>
          <CardSection>
            <Button>Edit Your Profile</Button>
          </CardSection>
          <CardSection>
            <Button>Edit General Settings</Button>
          </CardSection>
          <CardSection>
            <Button>Edit Security Settings</Button>
          </CardSection>
          <CardSection>
            <Button onPress={() => this.props.navigation.navigate("ViewEvent")}>
              View Signed-Up Events
            </Button>
          </CardSection>
          <CardSection>
            <Button onPress={this.logOut.bind(this)}> Log Out </Button>
          </CardSection>
        </Card>
      </Container>
    );
  }
}

module.export = SettingsScreen;
