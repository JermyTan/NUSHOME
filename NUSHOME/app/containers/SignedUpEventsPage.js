import React, { Component } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet
} from "react-native";
import { Text } from "native-base";
import CardSection from "../components/CardSection";
import Button from "../components/Button";
import SignedUpEvent from "../components/SignedUpEvent";
import firebase from "firebase";

export default class SignedUpEventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isFetching: false
    };
  }

  getEvents() {
    this.setState({ isFetching: true });
    firebase
      .database()
      .ref("events")
      .on("value", data => this.retrieveData(data));
  }

  retrieveData(data) {
    const event = data.val();
    const keys = Object.keys(event);
    const events = [];
    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      let eventDetails = {
        isSignedUp: event[k].SignedUp,
        title: event[k].Title,
        url: event[k].Image,
        dateTime: event[k].Date,
        venue: event[k].Venue,
        description: event[k].Description,
        key: event[k].Key
      };
      if (eventDetails.isSignedUp) {
        events.push(eventDetails);
      }
      //check if it works first
    }
    this.setState({ events: events, isFetching: false });
  }

  componentWillMount() {
    this.getEvents();
  }

  renderPage() {
    if (this.state.isFetching) {
      return <ActivityIndicator size="large" />;
    } else {
      return (
        <FlatList
          data={this.state.events}
          renderItem={({ item }) => <SignedUpEvent event={item} />}
          keyExtractor={item => item.key}
        />
      );
    }
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.title}>My Signed-Up Events</Text>
          {this.renderPage()}
          <CardSection>
            <Button onPress={() => this.props.navigation.navigate("Settings")}>
              Back
            </Button>
          </CardSection>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    alignSelf: "center"
  }
});
