import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({ children, customStyle}) => {
  return (
    <View style={[styles.card, customStyle]}>
      {
        children
      }
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        width: '88%',
        backgroundColor: 'white',
        borderRadius: 28,
        padding: 20,
        height: "50%",
        marginTop: 30,
        borderColor: "#d5d5dd",
        borderWidth: 1
    },
})