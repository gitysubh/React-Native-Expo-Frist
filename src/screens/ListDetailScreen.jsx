import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


const ListDetails = ({ image, title, subtitle }) => {
    return (
        <View style={styles.container}>
            <Image source={iamge} style={} />
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.title}>{subtitle}</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: "100%",
        height: "400",
        resizeMode: "cover",
    }
})
export default ListDetails;