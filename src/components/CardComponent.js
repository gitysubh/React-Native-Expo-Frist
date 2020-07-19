import React from "react";
import { View, Image, StyleSheet } from "react-native";

import color from "../config/color.json";
import AppText from "./AppText";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: color.white,
    borderRadius: 20,
    marginVertical: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10,
  },
  subtitle: {
    color: color.secondary,
    fontSize: 15,
  },
});

export default Card;
