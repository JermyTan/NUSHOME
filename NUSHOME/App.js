import React, { Component } from "react";
import Setup from "./app/setup.js";
import firebase from "firebase";

export default class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: "AIzaSyCLBaMaq2iCIw-0qMPnAQjM-1lOJWcrSKE",
      authDomain: "nus-home.firebaseapp.com",
      databaseURL: "https://nus-home.firebaseio.com",
      projectId: "nus-home",
      storageBucket: "",
      messagingSenderId: "489089414375",
      appId: "1:489089414375:web:434d7d3e3d64bc94"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return <Setup />;
  }
}
