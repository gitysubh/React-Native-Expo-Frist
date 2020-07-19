import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import Screen from "../components/Screen";
import Icon from '../components/IconCompoent';
import colors from '../config/color.json'
import ListItem from '../components/ListItem';
import Avatar from '../components/AvatarComponent'
import Seperator from '../components/SeparatorComponent'

const menuItems = [
    {
        title: "My Listings",
        icons: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    }, {
        title: "My Messages",
        icons: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]
const Account = ({ }) => {
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem
                    //ImageComponent={<Icon icon="format-list-bulleted" size={70} color={colors.white} background={colors.primary} />}
                    ImageComponent={<Avatar image={require('../assets/mosh.jpg')} size={70} />}
                    title="My title"
                    subtitle="code with mosh"
                />
            </View>

            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    renderItem={({ item }) =>
                        <ListItem ImageComponent={<Icon icon={
                            item.icons.name}
                            size={50}
                            background={item.icons.backgroundColor} />}
                            title={item.title}
                        />
                    }
                    keyExtractor={(item) => item.title}
                    ItemSeparatorComponent={() => <Seperator />}
                />
            </View>

            <View style={styles.container}>
                <ListItem ImageComponent={<Icon icon={
                    "logout"}
                    size={50}
                    background={colors.yellow} />}
                    title={"Logout"}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    }
})

export default Account;