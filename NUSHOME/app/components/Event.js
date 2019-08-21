import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import firebase from "firebase";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  setModalVisible(isModalVisible) {
    this.setState({ isModalVisible: isModalVisible });
  }

  //update the isSignedUp attribute in the database
  hasSignedUp() {
    //connect to firebase using key for the event
    firebase
      .database()
      .ref(`events/${this.props.event.key}`)
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
    //connect to firebase
    firebase
      .database()
      .ref(`events/${this.props.event.key}`)
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

  render() {
    const { title, url, dateTime, venue, description } = this.props.event;
    return (
      <View>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => this.setModalVisible(!this.state.isModalVisible)}
        >
          <Card>
            <CardSection>
              <Image source={{ uri: url }} style={styles.imageStyle} />
            </CardSection>
            <CardSection>
              <View style={styles.titleContainerStyle}>
                <Text style={styles.titleStyle}>{title}</Text>
              </View>
              <View style={styles.detailsContainerStyle}>
                <Text style={styles.detailsTextStyle}>{dateTime}</Text>
                <Text style={styles.detailsTextStyle}>{venue}</Text>
              </View>
            </CardSection>
          </Card>
        </TouchableOpacity>
        <Modal
          transparent={false}
          animationType="fade"
          visible={this.state.isModalVisible}
        >
          <SafeAreaView>
            <ScrollView>
              <Card>
                <CardSection>
                  <Image source={{ uri: url }} style={styles.modalImageStyle} />
                </CardSection>
                <CardSection style={styles.modalTitleDetailsStyle}>
                  <Text style={styles.modalTitleStyle}>{title}</Text>
                  <Text>{dateTime}</Text>
                  <Text>{venue}</Text>
                </CardSection>
                {this.renderSignupButton()}
                <CardSection>
                  <Text style={styles.modalDescriptionStyle}>
                    {description}
                  </Text>
                </CardSection>
                <CardSection>
                  <Button
                    onPress={() =>
                      this.setModalVisible(!this.state.isModalVisible)
                    }
                  >
                    Cancel
                  </Button>
                </CardSection>
              </Card>
            </ScrollView>
          </SafeAreaView>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleContainerStyle: {
    justifyContent: "center"
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10
  },
  imageStyle: {
    height: 250,
    flex: 1,
    width: null
  },
  detailsContainerStyle: {
    flex: 1,
    justifyContent: "flex-end",
    paddingRight: 10,
    paddingBottom: 5
  },
  detailsTextStyle: {
    textAlign: "right"
  },
  modalImageStyle: {
    height: 500,
    flex: 1,
    width: null
  },
  modalTitleDetailsStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    borderColor: "#ddd",
    position: "relative"
  },
  modalTitleStyle: {
    fontSize: 32,
    fontWeight: "bold"
  },
  modalDescriptionStyle: {
    fontSize: 18
  }
});
