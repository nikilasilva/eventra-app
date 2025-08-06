import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface TabIconProps {
    iconName: string;
    label: string;
    color: string;
    focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({iconName, label, color, focused}) => {
    return (
        <View className="items-center justify-center gap-1 pt-4">
            <Icon name={iconName} color={color} size={24}/>
            <Text
                className={`${focused ? 'font-pjsbold' : 'font-pjsregular'} text-xs w-12 text-center`}
                style={{color: color}}
            >
                {label}
            </Text>
        </View>
    );
};

export default TabIcon;