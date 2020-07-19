import React from 'react';
import { View, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/color.json';

const Icon = ({ icon, size = 40, color = colors.white, background = colors.black }) => {
    return (
        <View style={[styles.container, { backgroundColor: background, height: size, width: size }]}>
            <MaterialCommunityIcons name={icon} size={size / 2} color={color} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 50,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Icon;