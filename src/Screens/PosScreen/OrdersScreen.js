import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@react-native-vector-icons/ant-design'
import Ionicons from '@react-native-vector-icons/ionicons'
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'

const OrdersScreen = ({ navigation }) => {

    const [selectedButton, setSelectedButton] = useState('All item')
    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity>
                    onPress={() => navigation.goBack('POS')}
                    <View style={styles.childHeader}>

                        <AntDesign style={styles.leftArrowIcon}
                            name="arrow-left"
                            size={18}
                            color="#000" />
                        <Text style={styles.viewText}
                        >View Details</Text>

                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.searchBar}>
                <TouchableOpacity style={styles.searchIcon}>
                    <Ionicons
                        name="search"
                        size={24}
                        color="gray"
                    />
                </TouchableOpacity>

                <Text style={{
                    paddingLeft: 20,
                    paddingVertical: 10,
                    color: 'gray'
                }}>Search by Invoice ID or date...</Text>
            </View>

            <View style={styles.bottonRowContainer}>

                <TouchableOpacity
                    onPress={() => setSelectedButton('All')}
                    style={[
                        styles.itemsButton,
                        {
                            backgroundColor:
                                selectedButton === 'All' ? '#39406D' : '#D9D9D9',
                        },
                    ]}>
                    <Text
                        style={[
                            styles.rowText,
                            { color: selectedButton === 'All' ? '#fff' : '#000' },
                        ]}>
                        All
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedButton('Burgers')}
                    style={[
                        styles.itemsButton,
                        {
                            backgroundColor:
                                selectedButton === 'Burgers' ? '#39406D' : '#D9D9D9',
                        },
                    ]}>
                    <Text
                        style={[
                            styles.rowText,
                            { color: selectedButton === 'Burgers' ? '#fff' : '#000' },
                        ]}>
                        Burgers
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedButton('Pizzas')}
                    style={[
                        styles.itemsButton,
                        {
                            backgroundColor:
                                selectedButton === 'Pizzas' ? '#39406D' : '#D9D9D9',
                        },
                    ]}>
                    <Text
                        style={[
                            styles.rowText,
                            { color: selectedButton === 'Pizzas' ? '#fff' : '#000' },
                        ]}>
                        Pizzas
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => setSelectedButton('Donuts')}
                    style={[
                        styles.itemsButton,
                        {
                            backgroundColor:
                                selectedButton === 'Donuts' ? '#39406D' : '#D9D9D9',
                        },
                    ]}>
                    <Text
                        style={[
                            styles.rowText,
                            { color: selectedButton === 'Donuts' ? '#fff' : '#000' },
                        ]}>
                        Donuts
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.mainCard}>
                <View style={styles.card}>
                    
                   
                </View>

                <View style={styles.OngoingCard}>

                </View>
            </View>

        </ScrollView >
    )
}

export default OrdersScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F6FA",
        padding: 15,
    },

    header: {
        // width: '90%',
        height: 64,
        marginHorizontal: 10,
        marginTop: 20,
        marginLeft: 16,
        paddingRight: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#F1F3FB',
        borderRadius: 8,
    },

    viewText: {
        paddingLeft: 20,
        paddingTop: 15,
        fontSize: 20,
        fontWeight: 'bold'

    },

    childHeader: {
        flex: 1,
        flexDirection: 'row',
    },

    leftArrowIcon: {
        paddingLeft: 20,
        paddingTop: 20
    },

    searchBar: {
        height: 50,
        backgroundColor: '#F1F3FB',
        marginHorizontal: 15,
        borderRadius: 20,
        flexDirection: 'row',
        marginTop: 14,
    },

    searchIcon: {
        paddingtop: 20,
        paddingLeft: 15,
        marginTop: 14,
    },

    serachText: {
        paddingLeft: 10,
        paddingVertical: 10,
        color: 'gray',
        paddingTop: 15,
    },

    bottonRowContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },

    itemsButton: {
        height: 30,
        width: 95,
        backgroundColor: '#323B60',
        marginHorizontal: 5,
        borderRadius: 20,
        marginBottom: 15,
    },

    rowText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        paddingVertical: 5,
    },

      mainCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal:10
    },

    card: {
        width: 180,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 24,
        borderWidth: 1,
        paddingTop: 24,
        paddingRight: 15,
        paddingBottom: 24,
        paddingLeft: 6,
        marginHorizontal: 5,

        borderColor: '#C7C5CF1A',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,

        elevation: 2,
    },

    OngoingCard: {
        width: 180,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 24,
        borderWidth: 1,
        paddingTop: 24,
        paddingRight: 15,
        // paddingBottom: 24,
        paddingLeft: 6,
        marginHorizontal: 5,

        borderColor: '#C7C5CF1A',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,

        elevation: 2,
    },

    NumText: {
        fontSize: 24,
        color: '#323b60',
        fontWeight: 'bold',
    },

    divIcon: {
        height: 44,
        width: 44,
        borderRadius: 15,
        backgroundColor: '#7C8DFF33',
        padding: 12,
        flexDirection: 'row'
    },



})