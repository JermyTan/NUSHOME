import React, { Component } from "react";
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export default class MenuDrawer extends Component {
  naviLink(nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLinks}>
          <Image
            source={require("../assets/images/CAPT_logo.png")}
            style={{
              width: WIDTH * 0.65,
              flex: 1,
              resizeMode: "contain"
            }}
          />
        </View>
        <View style={styles.bottomLinks}>
          {this.naviLink("Home", "Home")}
          {this.naviLink("Facilities & Equipments", "Facilities & Equipments")}
          {this.naviLink("General Matters & FAQ", "General Matters & FAQ")}
          {this.naviLink("Settings", "Settings")}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#74273F"
  },
  topLinks: {
    height: HEIGHT * 0.25
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: "#74273F",
    paddingTop: 10,
    paddingBottom: 450
  },
  link: {
    flex: 1,
    fontSize: 16,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: "left",
    color: "#F4BE49"
  }
});
