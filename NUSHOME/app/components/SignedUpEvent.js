import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
  StyleSheet,
  SafeAreaView
} from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
import firebase from "firebase";

export default class SignedUpEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  setModalVisible(isModalVisible) {
    this.setState({ isModalVisible: isModalVisible });
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

  renderWithdrawButton() {
    return (
      <CardSection>
        <Button onPress={this.withdrawEvent.bind(this)}>Withdraw</Button>
      </CardSection>
    );
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
                {this.renderWithdrawButton()}
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
