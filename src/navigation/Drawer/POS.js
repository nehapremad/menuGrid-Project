import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const POS = () => {
  const navigation =useNavigation()
  return (
   <View>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Orders')}>
         <Text>Orders</Text>

      </TouchableOpacity>
    </View>
  )
}

export default POS

const styles = StyleSheet.create({})