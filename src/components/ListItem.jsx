import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Constants from "expo-constants";

import colors from "../config/color.json";

const ListItem = ({ ImageComponent, title, subtitle }) => {
    return (
        <View style={styles.container}>
            {ImageComponent}

            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: "row"
    },

    detailsContainer: {
        justifyContent: "center",
        marginLeft: 15
    },
    title: {
        color: colors.black,
        fontWeight: "bold",
        fontSize: 16,
        // marginBottom: 5
    },
    subtitle: {
        color: colors.deepGrey,
        fontSize: 15
    }

})

export default ListItem;