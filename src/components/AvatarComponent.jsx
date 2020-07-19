import React from 'react';
import { View, Image, StyleSheet } from 'react-native';


const Avatar = ({ image, size }) => {
    return (
        <Image style={[styles.avatar, { height: size, width: size, borderRadius: size * 2 }]} source={image}></Image>
    );
}

const styles = StyleSheet.create({
    avatar: {
        height: 70,
        width: 70,
        overflow: "hidden",
        resizeMode: "contain"
    },
})
export default Avatar;