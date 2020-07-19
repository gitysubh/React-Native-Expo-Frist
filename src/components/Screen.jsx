import React from 'react';
import { SafeAreaView, View } from 'react-native';

import Constants from "expo-constants";

const Screen = ({ style = {}, children }) => {
    return (
        <SafeAreaView style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
            <View style={style}>{children}</View>
        </SafeAreaView>
    );
}

export default Screen;