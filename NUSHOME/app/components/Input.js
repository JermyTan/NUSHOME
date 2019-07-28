import React, { Component } from "react";
import { TextInput, View, Text } from "react-native";

export default class Input extends Component {
  render() {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{this.props.label}</Text>
        <TextInput
          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          autoCorrect={false}
          style={inputStyle}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
        />
      </View>
    );
  }
}

const styles = {
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23, //space between lines of text, will make input text stand out more
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 //proportion of amount of space to be filled in parent container
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  }
};
