import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
import AntDesign from '@react-native-vector-icons/ant-design'
import { useNavigation } from "@react-navigation/native";

const DrawerItemData = [
    {
        label: 'Maian Branch',
        icon: {
            library: 'AntDesign', name: 'download'

        }, 
        path:"downloadCertificate"

        
    },
]

const CustomDrawer = (props) => {
    // const navigation = useNavigation();
    return (
        <DrawerContentScrollView {...props}>

            <View style={styles.container}>

                <View style={styles.profileRow}>
                    <Image
                        source={require('../../assets/Image/women.jpg')}
                        style={styles.profile}
                    />

                    <Text style={styles.name}>
                        Restaurant{'\n'} Manager
                    </Text>
                </View>


            </View>
        </DrawerContentScrollView>

    )
}

export default CustomDrawer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopRightRadius: 18,
        borderBottomRightRadius: 18,
    },
   

    profileRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginLeft:30,
    },

    profile: {
        width: 70,
        height: 70,
        borderRadius: 20,
    },

    name: {
        fontSize: 24,
        fontWeight: '600',
        marginLeft: 30,
        color: '#222',
    },

    
})