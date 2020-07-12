import React from 'react';
import { StyleSheet, View, Platform, StatusBar, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import color from '../config/color.json';

const ViewImageScreen = () => {
    return (
        <View styles={styles.container}>
            <View style={styles.buttonContainer}>
                <MaterialCommunityIcons name="close" size={30} color={color.white} />
                <MaterialCommunityIcons name="trash-can-outline" size={30} color={color.white} />
            </View>
            <Image style={styles.image} source={require("../assets/chair.jpg")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.black
    },
    buttonContainer: {
        width: "90%",
        height: 50,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        top: (Platform.OS === "android" ? StatusBar.currentHeight : 0) + 5,
        position: "absolute",
        zIndex: 1
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "contain",
        backgroundColor: color.black
    }
})

export default ViewImageScreen;