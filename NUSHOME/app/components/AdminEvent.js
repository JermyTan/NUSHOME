import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
  StyleSheet
} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import Input from "./Input.js";
import { Container } from "native-base";
import firebase from "firebase";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      dateTime: this.props.event.dateTime,
      venue: this.props.event.venue,
      description: this.props.event.description
    };
    this.editEvent = this.editEvent.bind(this);
  }

  setModalVisible(isModalVisible) {
    this.setState({ isModalVisible: isModalVisible });
  }

  //update the isSignedUp attribute in the database
  hasSignedUp() {
    const title = this.props.event.title;
    //connect to firebase using title as the title is the key for the event
    firebase
      .database()
      .ref(`events/${title}`)
      .update({
        SignedUp: true
      })
      .then(() => {
        //set the this.props.event.SignedUp to true
        this.setModalVisible(!this.state.isModalVisible);
        this.props.event.isSignedUp = true;
      })
      .catch(() => {
        console.log("Something bad happened");
      });
  }
  //update isSignedUp attribute in the database to false
  withdrawEvent() {
    const title = this.props.event.title;
    //connect to firebase
    firebase
      .database()
      .ref(`events/${title}`)
      .update({
        SignedUp: false
      })
      .then(() => {
        //set the this.props.event.SignedUp to false
        this.setModalVisible(!this.state.isModalVisible);
        this.props.event.isSignedUp = false;
      })
      .catch(() => {
        console.log("Something bad happened");
      });
  }

  renderSignupButton() {
    if (this.props.event.isSignedUp) {
      return (
        <CardSection>
          <Button onPress={this.withdrawEvent.bind(this)}>Withdraw</Button>
        </CardSection>
      );
    }

    return (
      <CardSection>
        <Button onPress={this.hasSignedUp.bind(this)}>Sign Up</Button>
      </CardSection>
    );
  }

  deleteEvent() {
    const key = this.props.event.key;
    console.log(key);
    firebase
      .database()
      .ref(`events/${key}`)
      .remove()
      .then(() => {
        console.log("Deleted");
        this.setModalVisible(!this.state.isModalVisible);
      })
      .catch(() => {
        console.log("Error encountered");
      });
  }

  editEvent(options, text) {
    console.log("Editing");
    if (options === "Date/Time") {
      this.props.event.dateTime = text;
      this.state.dateTime = text;
    } else if (options === "Venue") {
      this.props.event.venue = text;
      this.state.venue = text;
    } else {
      this.props.event.description = text;
      this.state.description = text;
    }
  }

  saveChanges() {
    //update all possible editable fields
    const key = this.props.event.key;
    firebase
      .database()
      .ref(`events/${key}`)
      .update({
        Date: this.state.dateTime,
        Description: this.state.description,
        Venue: this.state.venue
      })
      .then(() => {
        console.log("Saved and edited!");
        this.setModalVisible(!this.state.isModalVisible);
      })
      .catch(() => {
        console, log("Error sadly");
        this.setModalVisible(!this.state.isModalVisible);
      });
  }

  render() {
    const { title, url, dateTime, venue, description } = this.props.event;
    return (
      <View>
        <TouchableWithoutFeedback
          style={{ flex: 1 }}
          onPress={() => this.setModalVisible(!this.state.isModalVisible)}
        >
          <View>
            <CardSection>
              <Text style={styles.titleStyle}>{title}</Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
        <Modal
          transparent={false}
          animationType="fade"
          visible={this.state.isModalVisible}
        >
          <ScrollView>
            <Card>
              <CardSection>
                <Image source={{ uri: url }} style={styles.modalImageStyle} />
              </CardSection>

              <CardSection style={styles.modalTitleContainerStyle}>
                <Text style={styles.modalTitleStyle}>{title}</Text>
              </CardSection>

              <CardSection>
                <Input
                  label="Date/Time"
                  value={this.state.dateTime}
                  onChangeText={text => this.setState({ dateTime: text })}
                />
              </CardSection>

              <CardSection>
                <Input
                  label="Venue"
                  value={this.state.venue}
                  onChangeText={text => this.setState({ venue: text })}
                />
              </CardSection>

              <CardSection>
                <Input
                  label="Description"
                  value={this.state.description}
                  onChangeText={text => this.setState({ description: text })}
                />
              </CardSection>

              <CardSection>
                <Button onPress={this.saveChanges.bind(this)}>
                  Save Changes
                </Button>
              </CardSection>

              <CardSection>
                <Button
                  buttonStyle={styles.deleteButtonStyle}
                  textStyle={styles.deleteTextStyle}
                  onPress={this.deleteEvent.bind(this)}
                >
                  Delete
                </Button>
              </CardSection>
            </Card>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  modalImageStyle: {
    height: 400,
    flex: 1,
    width: null
  },
  modalTitleContainerStyle: {
    flexDirection: "row",
    justifyContent: "center"
  },
  deleteButtonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#d40000",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    marginLeft: 5,
    marginRight: 5
  },
  deleteTextStyle: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  }
});
