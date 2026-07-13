import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const Suppliers = () => {

  const navigation =useNavigation()
  return (
    <View>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Supplier')}>
         <Text>Suppliers</Text>

      </TouchableOpacity>
    </View>
  )
}

export default Suppliers

const styles = StyleSheet.create({})