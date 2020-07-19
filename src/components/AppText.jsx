import React from 'react';
import { Text } from "react-native";

import styles from '../config/style';

const AppText = ({ children, fontSize = 18, style }) => {
    return (
        <Text style={[styles.text, { fontSize }, style]}>{children}</Text>
    );
}

export default AppText;