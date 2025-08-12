import React from 'react';
import {Tabs} from 'expo-router';
import TabIcon from "@/components/common/TabIcon";

const OrganizerTabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#7041D3', // Primary color
                tabBarInactiveTintColor: '#CDCDE0', // Gray color
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: .25,
                    borderTopColor: '#232533',
                    height: 84,
                },
            }}
        >
            <Tabs.Screen
                name="dashboard"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon iconName={focused ? 'stats-chart' : 'stats-chart-outline'} label="Dashboard"
                                 color={color} focused={focused}
                        />
                    ),
                }}
            />

            <Tabs.Screen
                name="events"
                options={{
                    title: 'Events',
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon iconName={focused ? 'list' : 'list-outline'} label="Events" color={color}
                                 focused={focused}
                        />
                    )
                }}

            />


        </Tabs>
    )
}