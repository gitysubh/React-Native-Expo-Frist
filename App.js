import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  Platform,
} from "react-native";

import WelcomeScreen from "./src/screens/welcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import CardList from "./src/screens/CardListScreen";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <CardList />
        {/* <ViewImageScreen /> */}
      </SafeAreaView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0)",
    color: "#FFFFFF",
    flex: 1,
  },
});
