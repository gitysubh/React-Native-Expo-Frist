import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

import Card from '../components/CardComponent'
import color from '../config/color.json'
import { StatusBar } from 'expo-status-bar';

const CardList = () => {
    return (<View style={styles.cardlist}>
        <Card
            image={require("../assets/jacket.jpg")}
            title="Red jacket for sale"
            subtitle="$100"
        />
    </View>);
}

const styles = StyleSheet.create({
    cardlist: {
        backgroundColor: color.grey,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        padding: 10,
    },
})
export default CardList;