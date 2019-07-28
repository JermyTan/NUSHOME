import React, { Component } from "react";
import { View, Text, Switch } from "react-native";

export default class ToggleInput extends Component {
  render() {
    const { containerStyle, labelStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{this.props.label}</Text>
        <Switch
          value={this.props.value}
          onValueChange={this.props.onValueChange}
        />
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  }
};
