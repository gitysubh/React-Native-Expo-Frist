import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import Card from "../components/CardComponent"
import colors from "../config/color.json";

const listItem = [
    {
        id: 1,
        title: "Red jacket for sale",
        image: require('../assets/jacket.jpg'),
        subtitle: 100
    },
    {
        id: 2,
        title: "Couch in great condition",
        image: require('../assets/couch.jpg'),
        subtitle: 1000
    }
]
const ListingScreen = () => {
    return (
        <Screen style={styles.container}>
            <FlatList
                data={listItem}
                renderItem={({ item }) => <Card
                    image={item.image}
                    title={item.title}
                    subtitle={`$ ${item.subtitle}`}
                />}
                keyExtractor={listItem => listItem.id.toString()}
            />

        </Screen>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5
    }
})

export default ListingScreen;