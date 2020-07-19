import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Constants from "expo-constants";

import colors from "../config/color.json";
import AppText from "../components/AppText";

const ListItem = ({ ImageComponent, title, subtitle }) => {
    return (
        <View style={styles.container}>
            {ImageComponent}

            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
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
        //color: colors.black,
        fontWeight: "bold",
        //fontSize: 16,
        // marginBottom: 5
    },
    subtitle: {
        color: colors.deepGrey,
        fontSize: 16
    }

})

export default ListItem;