import React from "react";
import { View, Text, StyleSheet } from "react-native";

import colors from "../config/color.json";

function AppButton({ color = "primary", children }) {
  return (
    <View style={[styles.button, { backgroundColor: colors[color] }]}>
      <Text style={styles.label}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    width: "100%",
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

export default AppButton;
