import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

import color from "../config/color.json";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: color.white,
    borderRadius: 20,
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: "cover",
  },
  infoContainer: {
    padding: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10,
  },
  subtitle: {
    color: color.secondaryColor,
    fontSize: 15,
  },
});

export default Card;
