import React from 'react';
import { View, StyleSheet } from 'react-native';

const Seperator = () => {
    return (
        <View style={styles.container}></View>
    );
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 1,
        backgroundColor: "#f8f4f4"
    }
})

export default Seperator;