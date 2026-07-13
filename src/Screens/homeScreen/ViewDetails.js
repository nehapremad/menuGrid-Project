import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import AntDesign from '@react-native-vector-icons/ant-design';
import Ionicons from "@react-native-vector-icons/ionicons";
// import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';

const ViewDetails = () => {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity>
                    {/* onPress={() => navigation.goBack('Suppliers')} */}
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

            <View style={styles.farmsContainer}>
                <Text style={styles.farmText}>Fresh Farms</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.activeText}>Active</Text>
                    <Text style={styles.idText}>ID: SUP-8821</Text>
                </View>

            </View>

            <Text style={styles.contText}>Contact Information</Text>

            <View style={styles.deatilsContainer}>

                <View style={styles.card}>

                    <View style={styles.divIcon}>
                        <AntDesign
                            name="shopping-cart"
                            size={22}
                            color="#323b60"
                        />

                    </View>
                    <View style={styles.textItem}>
                        <Text style={styles.legalText}>Legal Business Name</Text>
                        <Text style={styles.freshText}>Fresh farms Agricultura Group LLC</Text>
                    </View>
                </View>

                <View style={styles.card}>

                    <View style={styles.divIcon}>
                        <AntDesign
                            name="contacts"
                            size={22}
                            color="#323b60"
                        />

                    </View>
                    <View style={styles.textItem}>
                        <Text style={styles.legalText}>GST Number</Text>
                        <Text style={styles.freshText}>22AAAAAA00000A1Z5</Text>
                    </View>
                </View>

                <View style={styles.card}>

                    <View style={styles.divIcon}>
                        <AntDesign
                            name="mail"
                            size={22}
                            color="#323b60"
                        />

                    </View>
                    <View style={styles.textItem}>
                        <Text style={styles.legalText}>Email Address</Text>
                        <Text style={styles.freshText}>orders@hbefber.com</Text>
                    </View>
                </View>

                <View style={styles.card}>

                    <View style={styles.divIcon}>
                        <Ionicons
                            name="call-outline"
                            size={22}
                            color="#323b60"
                        />

                    </View>
                    <View style={styles.textItem}>
                        <Text style={styles.legalText}>Phone Number</Text>
                        <Text style={styles.freshText}>+1(555)012-3456</Text>
                    </View>
                </View>

                <View style={styles.card}>

                    <View style={styles.divIcon}>
                        <Ionicons
                            name="location-outline"
                            size={22}
                            color="#323b60"
                        />

                    </View>
                    <View style={styles.textItem}>
                        <Text style={styles.legalText}>Address</Text>
                        <Text style={styles.freshText}>4228 Organic Way, site 100 San francisco, CA 9364</Text>
                    </View>
                </View>

            </View>

            <View style={styles.balancecontainer}>
                <View style={styles.balanceCard}>
                    <View style={styles.balanceTop}>
                        <View>
                            <Text style={styles.balanceTitle}>BALANCE DUE</Text>
                            <Text style={styles.balanceAmount}>$1,240.00</Text>
                        </View>

                        {/* <MaterialDesignIcons
                            name="wallet-outline"
                            size={70}
                            color="#E2E3EA"
                        /> */}
                    </View>

                    <TouchableOpacity style={styles.paymentBtn}>
                        {/* <MaterialDesignIcons
                            name="cash"
                            size={22}
                            color="#fff"
                        /> */}
                        <Text style={styles.paymentText}>Make a Payment</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.recentRow}>
                <View style={styles.recentHeader}>
                    <Text style={styles.recentHeaderTitle}>Recent Invoices</Text>

                    <TouchableOpacity>
                        <Text style={styles.viewAll}>View All</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.invoiceCard}>
                <View style={styles.leftContainer}>
                    <View style={styles.iconBox}>
                        <Ionicons
                            name="document-text-outline"
                            size={24}
                            color="#4B5BD7"
                        />
                    </View>

                    <View>
                        <Text style={styles.invoiceNo}>INV-2024-081</Text>
                        <Text style={styles.date}>Aug 12, 2024</Text>
                    </View>
                </View>

                <Text style={styles.amount}>₹450.00</Text>
            </View>


            <View style={styles.invoiceCard}>
                <View style={styles.leftContainer}>
                    <View style={styles.iconBox}>
                        <Ionicons
                            name="document-text-outline"
                            size={24}
                            color="#4B5BD7"
                        />
                    </View>

                    <View>
                        <Text style={styles.invoiceNo}>INV-2024-079</Text>
                        <Text style={styles.date}>Aug 05, 2024</Text>
                    </View>
                </View>

                <Text style={styles.amount}>₹790.00</Text>
            </View>

            <View style={styles.bottomCard}>
                <TouchableOpacity style={styles.addBtn}>
                    <Ionicons
                        name="document-text-outline"
                        size={22}
                        color="#fff"
                    />
                    <Text style={styles.addText}>Add Invoice</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default ViewDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FF"
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
        backgroundColor: 'white',
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

    farmsContainer: {
        marginHorizontal: 20,
        marginVertical: 10,
    },

    farmText: {
        fontSize: 20,
        fontWeight: '600',
    },

    activeText: {
        color: '#323B60'

    },

    idText: {
        color: 'gray',
        paddingLeft: 12
    },

    contText: {
        fontSize: 18,
        fontWeight: '500',
        marginHorizontal: 20,
        marginVertical: 15
    },

    deatilsContainer: {

        // height:200,
        // flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 16,
        paddingVertical: 18,
        borderWidth: 1,
        borderColor: '#F1F3FB',
        borderRadius: 8,


    },

    divIcon: {
        height: 44,
        width: 44,
        borderRadius: 15,
        backgroundColor: '#7C8DFF33',
        marginLeft: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20


    },

    card: {
        flexDirection: 'row',
    },

    textItem: {
        marginLeft: 15,
        flex: 1,
        textAlign: "right",
    },

    freshText: {
        fontWeight: 15,
        paddingHorizontal: 10

    },

    legalText: {
        fontWeight: 12,
        color: 'gray',
        paddingHorizontal: 10

    },

    balancecontainer: {
        flex: 1,
        backgroundColor: '#F6F7FC',
        padding: 16,
    },

    balanceCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 8,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },

    balanceTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    balanceTitle: {
        fontSize: 13,
        color: '#666',
        letterSpacing: 1,
    },

    balanceAmount: {
        fontSize: 25,
        fontWeight: '700',
        color: '#000',
        marginTop: 5,
    },

    paymentBtn: {
        marginTop: 22,
        height: 55,
        borderRadius: 14,
        backgroundColor: '#343B67',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },

    paymentText: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '500',
    },

    recentRow: {
        marginHorizontal: 15,
    },

    recentHeader: {
        marginTop: 28,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    recentHeaderTitle: {
        fontSize: 25,
        fontWeight: '700',
        color: '#111',
    },

    viewAll: {
        color: '#343B67',
        fontWeight: '600',
        fontSize: 15,
    },

    invoiceCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // elevation: 2,
        // shadowColor: '#000',
        // shadowOpacity: 0.08,
        // shadowRadius: 5,
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
    },

    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconBox: {
        width: 48,
        height: 48,
        backgroundColor: '#ECEEF7',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },

    invoiceNo: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111',

    },

    date: {
        fontSize: 15,
        color: '#666',
        marginTop: 4,
    },

    amount: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111',
    },

    bottomCard: {
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginHorizontal: 15
    },

    addBtn: {
        height: 55,
        backgroundColor: '#343B67',
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 15
    },

    addText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 10,
    },


})