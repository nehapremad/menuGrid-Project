import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Tabs/Home';
import Profile from '../Tabs/Profile';
import Menu from '../Tabs/Menu';
import Orders from '../Tabs/Orders';
import CustomTab from '../Tabs/CustomTabs';
import DashboardScreen from '../../../Screens/homeScreen/DashboardScreen';


const BottomNavigation = () => {

    const BottomTab = createBottomTabNavigator();

    return (

        <BottomTab.Navigator
            tabBar={(props) => (
                <CustomTab {...props} />
            )}
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen name="Home" component={DashboardScreen} />
            <BottomTab.Screen name="Profile" component={Profile} />
            <BottomTab.Screen name="Menu" component={Menu} />
            <BottomTab.Screen name="Orders" component={Orders} />
        </BottomTab.Navigator>

    )
}

export default BottomNavigation