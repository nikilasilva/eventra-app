import React from 'react';
import {Tabs} from 'expo-router';
import TabIcon from "@/components/common/TabIcon";

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#7041D3',
                tabBarInactiveTintColor: '#CDCDE0',
                tabBarStyle: {
                    backgroundColor: '#161622',
                    borderTopWidth: .25,
                    borderTopColor: '#232533',
                    height: 84,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon iconName={focused ? 'home' : 'home-outline'} label="Home" color={color}
                                 focused={focused}/>
                    ),
                }}
            />

            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon iconName={focused ? 'search' : 'search-outline'} label="Search" color={color}
                                 focused={focused}/>
                    ),
                }}
            />

            <Tabs.Screen
                name="tickets"
                options={{
                    title: 'Tickets',
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon
                            iconName={focused ? 'ticket' : 'ticket-outline'} label="Tickets" color={color}
                            focused={focused}/>
                    ),
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({color, focused}) => (
                        <TabIcon iconName={focused ? 'person' : 'person-outline'} label="Person" color={color}
                                 focused={focused}/>
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabsLayout;