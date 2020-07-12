import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../config/color";

function Button({ color, width, children }) {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
      borderRadius: 40,
      width: width,
      height: 60,
      justifyContent: "center",
      marginVertical: 10,
    },
    label: {
      fontSize: 20,
      color: colors.white,
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.button}>
      <Text style={styles.label}>{children}</Text>
    </View>
  );
}

export default Button;
