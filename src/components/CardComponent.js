import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Card = ({ title, subtitle, image }) => {
  return (
    <View>
      <Image source={image} />
      <View>
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: "20",
  },
  subtitle: {},
});

export default Card;
