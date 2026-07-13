import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/navigation/Stack/AppNavigation';
import RootNavigation from './src/navigation/Stack/RootNavigation' 
import { SafeAreaView } from 'react-native-safe-area-context';
import AddNewSupplierScreen from './src/Screens/homeScreen/AddNewSupplierScreen'



const App = () => {
  return (
   <>
    <SafeAreaView style={{ flex:1 }}>

        {/* <AppNavigator /> */}
         {/* <RootNavigation /> */}
        <AddNewSupplierScreen />
        
    </SafeAreaView>
    </>
  )
}

export default App    