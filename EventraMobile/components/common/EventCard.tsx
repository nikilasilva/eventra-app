import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DEFAULT_EVENT_IMAGE} from "@/constants/index"

interface EventCardProps {
    category: string;
    title: string;
    date: { month: string, day: string };
    time: string;
    venue: string;
    price: number;
    rating: number;
    imageUrl?: string;
}

const EventCard: React.FC<EventCardProps> = ({
                                                 category,
                                                 title,
                                                 date,
                                                 time,
                                                 venue,
                                                 price,
                                                 rating,
                                                 imageUrl,
                                             }) => {
    return (
        <TouchableOpacity className="w-64 bg-darkGray rounded-xl mr-4 overflow-hidden">
            <ImageBackground
                source={imageUrl ? {uri: imageUrl} : DEFAULT_EVENT_IMAGE}
                className="h-36 p-2 justify-between"
                imageStyle={{borderTopLeftRadius: 12, borderTopRightRadius: 12}}
            >
                <View className="flex-row justify-between items-start">
                    <View className="bg-primary px-2 py-1 rounded-md">
                        <Text className="text-white font-pjsmedium text-xs">{category}</Text>
                    </View>

                    <TouchableOpacity className="bg-gray-600 p-1.5 rounded-full">
                        <Icon name="star-outline" size={16} color="#FFFFFF"/>
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-end">
                    <View className="bg-white/90 px-2 py-1 rounded-full flex-row items-center">
                        <Icon name="star" size={12} color="#FFC700"/>
                        <Text className="text-black font-pjssemibold text-xs ml-1">{rating}</Text>
                    </View>
                </View>
            </ImageBackground>

            {/*Event details*/}
            <View className="p-3 flex-row">
                <View className="items-center mr-3">
                    <Text className="text-primary font-pjsbold text-sm">{date.month}</Text>
                    <Text className="text-white font-pjsextrabold text-2xl">{date.day}</Text>
                </View>

                <View className="flex-1">
                    <Text className="text-white font-pjssemibold text-base leading-tight" numberOfLines={2}>
                        {title}
                    </Text>
                    <Text className="text-gray-100 text-xs mt-1">{time}</Text>
                    <Text className="text-gray-100 text-xs">{venue}</Text>
                </View>

                <View className="justify-end">
                    <Text className="text-primary font-pjsbold text-lg">Rs. {price}</Text>
                </View>

            </View>
        </TouchableOpacity>
    );
};

export default EventCard;