import React from 'react';
import { StyleSheet, View, Platform, StatusBar, Image } from 'react-native';

const ViewImageScreen = () => {
    return (
        <View styles={styles.container}>
            <View style={styles.buttonContainer}>
                <View style={{ ...styles.buttons, backgroundColor: "#fc5c65" }}></View>
                <View style={{ ...styles.buttons, backgroundColor: "#4ECDC4" }}></View>
            </View>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000"
    },
    buttonContainer: {
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        top: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        position: "absolute"
    },
    buttons: {
        height: 50,
        width: 50
    },
    image: {
        height: "100%",
        width: "100%"
    }
})

export default ViewImageScreen;