import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import BottomNavigation from '../BottomTabBar/Tabs/BottomNavigation';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (

    <Drawer.Navigator
      screenOptions={{
        headerShown: false

      }}
      drawerContent={(props) => (
        <CustomDrawer {...props} />

      )}
    >

      <Drawer.Screen name="BottomTabs"
        component={BottomNavigation}
      />
    </Drawer.Navigator>

  );
};

export default DrawerNavigation;