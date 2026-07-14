import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import BottomNavigation from '../BottomTabBar/Tabs/BottomNavigation';
import Suppliers from '../Drawer/Suppliers';
import OrderScreen from '../../Screens/PosScreen/OrdersScreen'



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
      
      <Drawer.Screen name="BottomTabs" component={BottomNavigation}/>
      <Drawer.Screen name="Suppliers" component={Suppliers}/>
      <Drawer.Screen name='Orders' component={OrderScreen}/>
    </Drawer.Navigator>

  );
};

export default DrawerNavigation;