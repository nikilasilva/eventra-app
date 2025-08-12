import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Dimensions, ScrollView} from 'react-native';

import Screen from "@/components/common/Screen";
import SearchInput from "@/components/common/SearchInput";
import EventCard from "@/components/common/EventCard";
import Button from "@/components/common/Button";
import GradientText from "@/components/common/GradientText";

const HomeScreen = () => {
    const {width: SCREEN_WIDTH} = Dimensions.get('window');
    const [searchQuery, setSearchQuery] = useState("");

    // Dummy data for categories
    const categories = ['Music', 'Sport', 'Art', 'Tech', 'Food'];

    const sampleEvents = [
        {
            id: '1',
            category: 'Technology',
            title: 'React Native Conf 2025',
            date: {month: 'NOV', day: '22'},
            time: '09:00 AM - 05:00 PM',
            venue: 'Online',
            price: 1200,
            rating: 4.8,
        },
        {
            id: '2',
            category: 'Music',
            title: 'Acoustic Nights Live',
            date: {month: 'DEC', day: '05'},
            time: '07:00 PM - 10:00 PM',
            venue: 'Open Air Theatre',
            price: 2500,
            rating: 4.9,
        },
        {
            id: '3',
            category: 'Art',
            title: 'Modern Art Exhibition',
            date: {month: 'DEC', day: '15'},
            time: '10:00 AM - 08:00 PM',
            venue: 'National Art Gallery',
            price: 500,
            rating: 4.7,
        },
    ];

    return (
        <Screen>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {/*Header*/}
                <View className="mb-1 mt-safe-offset-2">
                    <GradientText text="Looking for something?" className="font-pjsextrabold text-4xl px-4 h-12">
                    </GradientText>
                </View>

                {/* Search Input */}
                <View className="px-4">
                    <SearchInput value={searchQuery} onChangeText={setSearchQuery}/>
                </View>

                {/* Explore Categories */}
                <View className="mb-8">
                    <View className="flex-row justify-between items-center mb-4">
                        <Text className="text-white font-pjsbold text-2xl px-4">Explore Categories</Text>
                        <TouchableOpacity>
                            <Text className="text-primary font-pjssemibold px-4">see all</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingLeft: 16}}
                    >
                        {categories.map((item) => (
                            <TouchableOpacity key={item} className="items-center mr-6">
                                <View className="w-16 h-16 bg-primary rounded-full mb-2"/>
                                <Text className="text-gray-100 font-pjsmedium">{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>

                {/* Popular Events */}
                <View className="mb-8">
                    <Text className="text-white font-pjsbold text-2xl mb-4 px-4">Popular Events</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingLeft: 16}}
                    >
                        {sampleEvents.map((item) => (
                            <EventCard key={item.id} {...item} />
                        ))}
                    </ScrollView>
                </View>

                {/* Best Online Events */}
                <View className="mb-8">
                    <Text className="text-white font-pjsbold text-2xl mb-4 px-4">Best Online Events</Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingLeft: 16}}
                    >
                        {[...sampleEvents].reverse().map((item) => (
                            <EventCard key={`online-${item.id}`} {...item} />
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </Screen>
    );
};

export default HomeScreen;