import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import{NavigationContainer} from '@react-navigation/native'
// import Drawer from '../Drawer/CustomDrawer'
import DrawerNavigation from '../Drawer/DrawerNavigation'



const Stack = createStackNavigator()
const RootNavigation = () => {
  return (
<NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      {/* <Stack.Screen name="DrawerTab" component={CustomDrawer} /> */}
      
      <Stack.Screen name='drawer' component={DrawerNavigation} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation