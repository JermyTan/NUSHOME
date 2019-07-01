import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Container, Text, Button } from "native-base";
import MyHeader from "../components/header";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class HouseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false
    };
  }

  setModalVisible(isModalVisible) {
    this.setState({ isModalVisible: isModalVisible });
  }

  render() {
    return (
      <Container>
        <View>
          <MyHeader navigation={this.props.navigation} />
        </View>
        <View style={styles.container}>
          <Text style={styles.header1}>Upcoming</Text>
          <Text style={styles.header2}>Events</Text>
          <TouchableOpacity
            style={styles.event}
            onPress={() => this.setModalVisible(!this.state.isModalVisible)}
          >
            <Image
              source={require("../assets/images/event1.png")}
              style={styles.event}
            />
          </TouchableOpacity>
        </View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.isModalVisible}
        >
          <Button
            onPress={() => this.setModalVisible(!this.state.isModalVisible)}
          >
            <Text>Close</Text>
          </Button>
          <Image
            source={require("../assets/images/event1.png")}
            style={{
              flex: 1,
              height: HEIGHT,
              width: WIDTH,
              resizeMode: "contain"
            }}
          />
        </Modal>
      </Container>
    );
  }
}

module.export = HouseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003D7C"
  },
  logo: {
    height: 100,
    width: 100,
    position: "absolute",
    right: 3,
    top: 5
  },
  header1: {
    fontSize: 35,
    color: "#FFFFFF",
    marginBottom: 3,
    position: "absolute",
    left: 5,
    top: "2%"
  },
  header2: {
    fontSize: 35,
    color: "#FFFFFF",
    marginBottom: 3,
    position: "absolute",
    left: 5,
    top: "10%"
  },
  event: {
    flex: 1,
    position: "absolute",
    height: 300,
    width: 150,
    left: "1%",
    top: "15%",
    resizeMode: "contain"
  },
  event2: {
    flex: 1,
    position: "absolute",
    height: 300,
    width: 150,
    left: "52%",
    top: "15%",
    resizeMode: "contain"
  },
  event3: {
    flex: 1,
    height: 300,
    width: 150,
    right: "25.5%",
    top: "62%",
    resizeMode: "contain"
  },
  event4: {
    flex: 1,
    height: 300,
    width: 150,
    left: "25.5%",
    bottom: "-12%",
    resizeMode: "contain"
  }
});
