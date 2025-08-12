import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import Screen from "@/components/common/Screen"
import GradientText from "@/components/common/GradientText";
import StatCard from "@/components/Organizer/StatCard";

const OrganizerDashboard = () => {

    // Dummy data
    const organizerName = 'Creative Event INC.';
    const totalRevenue = 'Rs. 850, 000';
    const ticketSold = "1,200";
    const upcomingEvents = "4";

    return (
        <Screen>
            <ScrollView showsHorizontalScrollIndicator={false}>

                {/* Header */}
                <View className="mb-6">
                    <Text className="text-gray-100 font-pjssemibold text-lg">Welcome back,</Text>
                    <GradientText text={organizerName} className="font-pjsbold text-3xl"/>
                </View>

                {/* Key Stats Section */}
                <View className="mb-8">
                    <Text className="text-white font-pjsbold text-xl mb-4">Lifetime Stats</Text>
                    <View className="flex-row gap-4">
                        <StatCard title="Total Revenue" value={totalRevenue} iconName="cash-outline"/>
                        <StatCard title="Tickets Sold" value={ticketsSold} iconName="ticket-outline"/>
                    </View>
                </View>

                {/* Upcoming Events Section */}
                <View>
                    <Text className="text-white font-pjsbold text-xl mb-4">Upcoming Events ({upcomingEvents})</Text>
                    {/* You can map over your upcoming events here */}
                    <View className="bg-surface rounded-lg p-4 mb-3">
                        <Text className="text-white font-pjssemibold text-base">Tech Conference 2025</Text>
                        <Text className="text-gray-100 font-pjsregular text-sm">NOV 22 - 24 | Colombo</Text>
                    </View>
                    <View className="bg-surface rounded-lg p-4 mb-3">
                        <Text className="text-white font-pjssemibold text-base">Music Fest</Text>
                        <Text className="text-gray-100 font-pjsregular text-sm">DEC 10 | Galle Face Green</Text>
                    </View>
                </View>


            </ScrollView>
        </Screen>
    );
};

export default OrganizerDashboard;