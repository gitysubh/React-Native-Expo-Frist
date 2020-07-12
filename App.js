import React, { Component, useState } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { render } from "react-dom";
import WelcomeScreen from "./src/screens/welcomeScreen";
import ViewImageScreen from "./src/screens/ViewImageScreen";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <WelcomeScreen />
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
