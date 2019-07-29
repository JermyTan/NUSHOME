import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Container, Text } from "native-base";
import MyHeader from "../components/header";

export default class FacilitiesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    alert("Page is under development");
  }

  render() {
    return (
      <Container>
        <View>
          <MyHeader navigation={this.props.navigation} />
        </View>
        <View style={styles.container}>
          <Text style={styles.header1}>Facilities &</Text>
          <Text style={styles.header2}>Equipments</Text>
          <Text style={styles.booking}>Make a booking</Text>
          <TouchableOpacity style={styles.facilities}>
            <Text style={styles.button1}>Book Facilities</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.equipment}>
            <Text style={styles.button1}>Book Equipments</Text>
          </TouchableOpacity>
          <Text style={styles.record}>Records</Text>
          <TouchableOpacity style={styles.current}>
            <Text style={styles.button2}>Current Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.complete}>
            <Text style={styles.button2}>Completed Bookings</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

module.export = FacilitiesScreen;

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
  booking: {
    fontSize: 25,
    color: "#FFFFFF",
    position: "absolute",
    left: "22%",
    top: "22%",
    fontWeight: "bold",
    fontStyle: "italic"
  },
  facilities: {
    backgroundColor: "#EF7C00",
    paddingVertical: 15,
    position: "absolute",
    alignItems: "center",
    width: 135,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    left: "5%",
    bottom: "55%"
  },
  button1: {
    color: "black",
    fontWeight: "700",
    fontSize: 15
  },
  equipment: {
    backgroundColor: "#EF7C00",
    paddingVertical: 15,
    position: "absolute",
    alignItems: "center",
    width: 135,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    right: "5%",
    bottom: "55%"
  },
  record: {
    fontSize: 25,
    color: "#FFFFFF",
    position: "absolute",
    fontWeight: "bold",
    fontStyle: "italic"
  },
  current: {
    backgroundColor: "#EF7C00",
    paddingVertical: 15,
    position: "absolute",
    alignItems: "center",
    width: 300,
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    top: "55%"
  },
  button2: {
    color: "black",
    fontWeight: "700",
    fontSize: 20
  },
  complete: {
    backgroundColor: "#EF7C00",
    paddingVertical: 15,
    position: "absolute",
    alignItems: "center",
    width: 300,
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "center",
    top: "72%"
  }
});
