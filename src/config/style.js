import { StyleSheet, Platform } from "react-native";

import colors from "./color.json";

export default StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark,
  },
});
