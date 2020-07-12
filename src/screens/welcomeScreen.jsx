import React from "react";
import { View, StyleSheet, Text, ImageBackground, Image } from "react-native";

import Button from '../components/ButtonComponent'
import color from '../config/color'

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.backgroundImage}
      blurRadius={2}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <Button color={color.primaryColor} width="90%">{"login"}</Button>
      <Button color={color.secondaryColor} width="90%">{"Register"}</Button>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoContainer: {
    alignItems: "center",
    top: "20%",
    position: "absolute"
  },
  logo: {
    height: 100,
    width: 100,
  },
  tagline: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold"
  }
});
