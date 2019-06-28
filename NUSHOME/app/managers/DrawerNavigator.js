import React, { Component } from "react";
import { Platform, Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "../containers/HomeScreen";
import HouseScreen from "../containers/HouseScreen";
import InterestGroupsScreen from "../containers/InterestGroupsScreen";
import EventsScreen from "../containers/EventsScreen";
import FacilitiesScreen from "../containers/FacilitiesScreen";
import FAQScreen from "../containers/FAQScreen";
import SettingsScreen from "../containers/SettingsScreen";
import MenuDrawer from "../components/MenuDrawer";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.65,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  }
};

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    House: {
      screen: HouseScreen
    },
    "Interest Groups": {
      screen: InterestGroupsScreen
    },
    Events: {
      screen: EventsScreen
    },
    "Facilities & Equipments": {
      screen: FacilitiesScreen
    },
    "General Matters & FAQ": {
      screen: FAQScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  DrawerConfig
);

export default createAppContainer(DrawerNavigator);
