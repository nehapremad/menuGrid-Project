import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import{NavigationContainer} from '@react-navigation/native'
// import Drawer from '../Drawer/CustomDrawer'
import DrawerNavigation from '../Drawer/DrawerNavigation'
import NearExpiryScreen from '../../Screens/homeScreen/NearExpiryScreen'
import OutOfStockScreen from '../../Screens/homeScreen/OutOfStockScreen'
import SuppliersScreen from '../../Screens/homeScreen/SuppliersScreen'



const Stack = createStackNavigator()
const RootNavigation = () => {
  return (
<NavigationContainer>
    <Stack.Navigator
    initialRouteName='drawer'
      screenOptions={{
        headerShown: false
      }}>
      
        <Stack.Screen name='drawer' component={DrawerNavigation} />
        <Stack.Screen name='NearExpiry' component={NearExpiryScreen} />
        <Stack.Screen name='OutOfStock' component={OutOfStockScreen} />
        <Stack.Screen name='Supplier' component={SuppliersScreen} />
      
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation