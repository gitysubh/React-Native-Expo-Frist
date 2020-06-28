import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const [isImageShown, setImamgeDisplayState] = useState(true);

  const toggleImage = () => {
    const message = isImageShown
      ? "Are you sure to hide the image"
      : "Are you sure to show the image";

    Alert.alert("Confirm", message, [
      {
        text: "Yes",
        onPress: () => setImamgeDisplayState(!isImageShown),
        style: { backgroundColor: "Green" },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello fucking world. How are you</Text>
      <Text>
        I love India. Making this text such a long one. Like to see the line
        break case
      </Text>
      {isImageShown && (
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      )}
      <Button
        onPress={toggleImage}
        title={isImageShown ? "Hide Image" : "Show Image"}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 3,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
