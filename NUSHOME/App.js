/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StatusBar } from "react-native";
import {
  Platform,
  StyleSheet,
  View,
  Navigator,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions
} from "react-native";
import { Header } from "react-native";
import { AppRegistry, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";
import SettingScreen from "./Screens/SettingScreen";
import HomeScreen from "./Screens/HomeScreen";
import HouseScreen from "./Screens/HouseScreen";
import EventsPage from "./Screens/EventsPage";
import InterestGroupsPage from "./Screens/InterestGroupsPage";
import FacilitiesPage from "./Screens/FacilitiesPage";
import FAQPage from "./Screens/FAQPage";
import { Button } from "react-native-elements";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = {};

const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "#7B153A",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Image
        source={require("./photo.png")}
        style={{ height: 120, width: 120, borderRadius: 60 }}
      />
    </View>
    <ScrollView style={{ backgroundColor: "#7B153A" }}>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

//Custom front end for the front page, just a prototype may include scroll-downs at a later point

const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    House: {
      screen: HouseScreen
    },
    "Interest Groups": {
      screen: InterestGroupsPage
    },
    Events: {
      screen: EventsPage
    },
    "Facilities & Equipments": {
      screen: FacilitiesPage
    },
    "General Matters & FAQ": {
      screen: FAQPage
    },
    Settings: {
      screen: SettingScreen
    }
  },
  {
    contentComponent: CustomDrawerComponent,
  }
);

const Drawer = createAppContainer(AppDrawerNavigator);
/*
class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Image source ={require("./photo.png")}
          style={styles.logo}
        />
        <Text style={styles.Header}>Latest News</Text>
        <Image source={require("./SampleEvent.jpg")}
          style={styles.Event} />
        <Image source={require("./SampleEvent.jpg")}
          style={styles.Event2} />
        <Image source={require("./banner.png")}
          style={styles.Banner} />
        <TouchableOpacity style={styles.Help} activeOpacity={0.5}>
          <Image source={require("./help.png")}
            style={styles.ImageIconStyle}
          />
          <View style={styles.SeparatorLine} />
          <Text style={styles.TextStyle}> Ask For Help </Text>
        </TouchableOpacity>
      </View>
    );
  }
}*/

export default class App extends React.Component {
  render() {
    return <Drawer />;
  }
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    backgroundColor: "#003D7C"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  logo: {
    height: 100,
    width: 100,
    position: "absolute",
    right: 3,
    top: 5
  },
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#003D7C"
  },
  Header: {
    fontSize: 25,
    color: "#FFFFFF",
    marginBottom: 3,
    position: "absolute",
    left: 5,
    top: "15%"
  },
  Help: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D3D3D3",
    borderWidth: 0.5,
    borderColor: "#fff",
    height: 40,
    width: 125,
    borderRadius: 5,
    margin: 5,
    left: "18%",
    top: "60%"
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch"
  },
  SeparatorLine: {
    backgroundColor: "#fff",
    width: 1,
    height: 40
  },
  TextStyle: {
    color: "#fff",
    marginBottom: 4,
    marginRight: 20
  },
  Event: {
    flex: 1,
    position: "absolute",
    height: 300,
    width: 150,
    left: "1%",
    top: "15%",
    resizeMode: "contain"
  },
  Event2: {
    flex: 1,
    position: "absolute",
    height: 300,
    width: 150,
    left: "50%",
    top: "15%",
    resizeMode: "contain"
  },
  Banner: {
    position: "absolute",
    height: 250,
    width: 325,
    left: "0%",
    bottom: "0%",
    resizeMode: "contain"
  }
});
