import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  StatusBar,
  Platform,
} from "react-native";

import colors from "./src/config/color.json";
import ListingScreen from "./src/screens/ListingScreen";

class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ListingScreen />
      </SafeAreaView>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    color: "#FFFFFF",
    flex: 1,
    paddingHorizontal: 5,
  },
});
