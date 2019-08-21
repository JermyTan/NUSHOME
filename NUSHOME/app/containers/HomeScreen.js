import React, { Component } from "react";
import { FlatList, ActivityIndicator } from "react-native";
import { Container } from "native-base";
import MyHeader from "../components/header";
import Event from "../components/Event";
import firebase from "firebase";

export default class HomeScreen extends Component {
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
      events.push(eventDetails);
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
          renderItem={({ item }) => <Event event={item} />}
          keyExtractor={item => item.key}
        />
      );
    }
  }

  render() {
    return (
      <Container>
        <MyHeader navigation={this.props.navigation} />
        {this.renderPage()}
      </Container>
    );
  }
}
