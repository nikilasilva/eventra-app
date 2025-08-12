import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface StatCardProps {
    title: string;
    value: number;
    iconName: string;
}

const StatCard: React.FC<StatCardProps> = ({title, value, iconName}) => {
    return (
        <View className="bg-darkGray rounded-xl p-4 flex-1 items-center">
            <Icon name={iconName} size={28} color="#7041D3"/>
            <Text className="text-white font-pjsextrabold text-2xl mt-2">{value}</Text>
            <Text className="text-gray-100 font-pjsmedium text-sm">{title}</Text>
        </View>
    );
};

export default StatCard;