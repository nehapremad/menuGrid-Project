import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from './helper'

const CustomButton = ({customStyle, label="", onPress}) => {
    return (
        <TouchableOpacity
            style={[styles.button, customStyle]}
            onPress={onPress}
        >
          
            <Text style={styles.buttonText}>
             {label}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton


const styles = StyleSheet.create({

    button: {
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }

})