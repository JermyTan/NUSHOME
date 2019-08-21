import React, { Component } from "react";
import { ScrollView, Alert, SafeAreaView } from "react-native";
import Card from "../components/Card";
import CardSection from "../components/CardSection";
import Button from "../components/Button";
import Input from "../components/Input";
import ToggleInput from "../components/ToggleInput";
import firebase from "firebase";

export default class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      date: "",
      image: "",
      signedUp: false,
      description: "",
      venue: ""
    };
    this.updateDatabase = this.updateDatabase.bind(this);
  }

  updateDatabase() {
    if (this.state.title == "" || this.state.description == "") {
      alert("Please input the title or description before creating the event!");
    } else {
      firebase
        .database()
        .ref(`events/${this.state.title}`)
        .set({
          Date: this.state.date,
          Description: this.state.description,
          Image: this.state.image,
          SignedUp: false,
          Title: this.state.title,
          Venue: this.state.venue,
          Key: this.state.title
        })
        .then(() => {
          console.log("Inserted");
        })
        .catch(() => {
          console.log("Error");
        });
      Alert.alert(
        "Event Created",
        "Click Ok to head back to Admin Page!",
        [
          { text: "OK", onPress: () => this.props.navigation.navigate("Admin") }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Card>
            <CardSection>
              <Input
                label="Title"
                onChangeText={title => this.setState({ title })}
                value={this.state.title}
              />
            </CardSection>
            <CardSection>
              <Input
                label="Date/Time"
                onChangeText={date => this.setState({ date })}
                value={this.state.date}
              />
            </CardSection>
            <CardSection>
              <Input
                label="Description"
                onChangeText={description => this.setState({ description })}
                value={this.state.description}
              />
            </CardSection>
            <CardSection />
            <CardSection>
              <Input
                label="Venue"
                onChangeText={venue => this.setState({ venue })}
                value={this.state.venue}
              />
            </CardSection>
            <CardSection>
              <Input
                label="Image URL"
                onChangeText={image => this.setState({ image })}
                value={this.state.image}
              />
            </CardSection>
            <CardSection>
              <Button onPress={this.updateDatabase}>Create Event</Button>
            </CardSection>
            <CardSection>
              <Button onPress={() => this.props.navigation.navigate("Admin")}>
                Cancel
              </Button>
            </CardSection>
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
