import { View, Text } from 'react-native'
import React from 'react'
// import AppNavigator from './src/navigation/Stack/AppNavigation';
// import RootNavigation from './src/navigation/Stack/RootNavigation' 
import { SafeAreaView } from 'react-native-safe-area-context';
import DashboardScreen from './src/Screens/homeScreen/DashboardScreen'



const App = () => {
  return (
   <>
    <SafeAreaView style={{ flex:1 }}>

        {/* <AppNavigator /> */}
        {/* <RootNavigation /> */}
        <DashboardScreen />
        
      
    </SafeAreaView>
    </>
  )
}

export default App    