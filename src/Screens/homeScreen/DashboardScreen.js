import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'

const DashboardScreen = () => {
    return (

        <View style={styles.container}>
            <View style={styles.header}></View>

            <View style={styles.mainCard}>
                <View style={styles.card}>

                    <View style={styles.div}>
                        <MaterialDesignIcons
                            name="lock-reset"
                            size={30}
                            color="#323b60"
                        />
                    </View>

                    <Text style={styles.Text}>Today Order</Text>
                    <Text style={styles.NumText}>124</Text>

                </View>

                <View style={styles.card}>
                    <View style={styles.RevenueBox}>
                        <MaterialDesignIcons
                            name="lock-reset"
                            size={30}
                            color="#323b60"
                        />

                        <Text style={styles.Text}>Today Revenue</Text>
                        <Text style={styles.NumText}>3,430</Text>
                    </View>
                </View>
            </View>
            <View style={styles.OngoingCard}>
                <MaterialDesignIcons
                    name="lock-reset"
                    size={30}
                    color="#323b60"
                />

                <Text style={styles.Text}>Ongoning Orders</Text>
                <Text style={styles.NumText}>12/20</Text>

            </View>

            <View style={styles.bluesCard}>
                <View style={styles.blueCard}>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Add Inventory Item</Text>
                </View>

                <View style={styles.blueCard}>
                    <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}>Stock In</Text>
                </View>
            </View>

            <View style={styles.blueCardText}>
                <Text style={styles.blueCardText}>Out of Stock</Text>

                <TouchableOpacity>
                    <Text style={{ color: 'blue', marginTop:30, }}>View More</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#F7F7FF"
    },

    header: {
        height: 60,
        width: '90%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15

    },

    mainCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 20,
    },

    card: {
        width: '45%',
        height: 150,
        backgroundColor: 'white',
        borderRadius: 18,
        padding: 15,
        marginHorizontal: 10,
        borderColor: '#d9d9e0bd',
        borderWidth: 1,
        shadowRadius: 9,
        shadowColor: 'pinck'
    },

    div: {
        height: 37,
        width: 37,
        borderRadious: 20,
        backgroundColor: '#e5e8ff',
    },

    Text: {
        fontSize: 17,
        color: '#323b60',
    },

    NumText: {
        fontSize: 24,
        color: '#323b60',
        fontWeight: 'bold'

    },

    OngoingCard: {
        height: 150,
        width: '90%',
        backgroundColor: 'white',
        padding: 15,
        marginHorizontal: 10,
        borderRadius: 18,
        marginTop: 20,
    },

    bluesCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 20,
    },

    blueCard: {
        width: '45%',
        height: 50,
        padding: 15,
        marginHorizontal: 10,
        backgroundColor: '#323b60',
        borderRadius: 18,
    },

    blueCardText: {
        marginTop: 30,
        fontSize: 24,
        marginRight: 50
    }

})