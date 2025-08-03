import React from 'react';
import {View, StatusBar, SafeAreaView} from "react-native";

interface ScreenProps {
    children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = ({children}) => {
    return (
        // Use edgest to control safe area paddings
        <SafeAreaView style={{flex: 1, backgroundColor: '#000000'}}>
            <StatusBar barStyle="light-content"/>
            <View className="flex-1 p-6">
                {children}
            </View>
        </SafeAreaView>
    );
};

export default Screen;