import { View, Text, TextInput, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'

const InputField = ({label="", iconName="email", style={}, onChangeText=()=>{}, value='', name='',
onBlur=()=>{},
    secureTextEntry = false,
}) => {
  return (
    <>
     <Text style={styles.label}>{label ?? ''}</Text>

                <View style={styles.input}>
                    <MaterialDesignIcons
                        name={iconName}
                        size={22}
                        color="#777"
                    />
                    <TextInput
                    style={styles.textInput}
                    value={value}
                    onBlur={onBlur}
                        placeholder="jhon@gmail.com"
                        placeholderTextColor="#B8B8C0"
                        secureTextEntry={secureTextEntry}
                        onChangeText={onChangeText}
                        // style={{ flex: 1 }}
                    />
                </View>
    </>
  )
}

export default InputField

const styles = StyleSheet.create({
     label: {
        color: "#757171f8",
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 10,
        paddingHorizontal: 15,
        


    },

    input: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#9691916e',
        paddingHorizontal: 15,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    textInput:{
        color:"#000", 
        flex:1,
        // backgroundColor:'#edf1ff'
    }
})