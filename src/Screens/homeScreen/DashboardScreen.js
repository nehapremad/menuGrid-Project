import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React from 'react'
import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons'
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons'
import AntDesign from '@react-native-vector-icons/ant-design'
import Ionicons from "@react-native-vector-icons/ionicons";

const DashboardScreen = () => {

    const data = [
        {
            id: 1,
            name: 'Tomato',
            category: 'Kitchen\nPantry',
            status: '0 LEFT',
        },
        {
            id: 2,
            name: 'Milk',
            category: 'Dairy\nFridge',
            status: '0 LEFT',
        },
    ];

    const expiryData = [
        {
            id: 1,
            expiryName: 'Curd',
            expiry: '24 Oct 2023',
            time: '2 Days Left',
        },
        {
            id: 2,
            expiryName: 'Curd',
            expiry: '24 Oct 2023',
            time: '2 Days Left',
        },
    ];
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerImage}>
                        <Image style={{ height: 40, width: 40 }} source={require('../../assets/Image/f7232c625dbe8631ec2f4c243fa12bd996bed4cf.png')} />
                        <Text style={styles.menuText}>MENUGRID</Text>
                    </View>
                </View>

                <View style={styles.mainCard}>
                    <View style={styles.card}>

                        <View style={styles.divIcon}>
                            <AntDesign
                                name="shopping-cart"
                                size={22}
                                color="#323b60"
                            />
                        </View>

                        <Text style={styles.Text}>Today Order</Text>
                        <Text style={styles.NumText}>124</Text>

                    </View>

                    <View style={styles.card}>
                        <View style={styles.RevenueBox}>
                            <View style={styles.divIcon}>
                                <MaterialDesignIcons
                                    name="cash"
                                    size={20}
                                    color="#323b60"
                                />
                            </View>

                            <Text style={styles.Text}>Today Revenue</Text>
                            <Text style={styles.NumText}>3,430</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.OngoingCard}>
                    <View style={styles.divIcon}>
                        <MaterialCommunityIcons
                            name="clipboard-list-outline"
                            size={20}
                            color="#323b60"

                        />
                    </View>
                    <Text style={styles.Text}>Ongoning Orders</Text>
                    <Text style={styles.NumText}>12/20</Text>

                     {/* <View stye={styles.liveDiv}>
                        <Text style={styles.liveText}>Live</Text>
                    </View> */}

                </View>

                {/* this is Stock item */}
                <View style={styles.stockContainer}>

                    <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Add Inventory Item</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Stock In</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.stockHeader}>
                    <Text style={styles.title}>Out of Stock</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewMore}>View More</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.ItemCard}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.headerText}>Item Name</Text>
                        <Text style={styles.headerText}>Category</Text>
                        <Text style={styles.headerText}>Status</Text>
                    </View>

                    {data.map(item => (
                        <View key={item.id} style={styles.row}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons
                                    name="delete-outline"
                                    size={20}
                                    color="#E53935"
                                />
                            </View>

                            {/* <Text style={styles.itemName}>{item.name}</Text> */}

                            <View style={styles.criticalBadge}>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.criticalText}>CRITICAL</Text>
                            </View>
                            {/* </View> */}

                            <Text style={styles.category}>{item.category}</Text>

                            <Text style={styles.status}>{item.status}</Text>
                        </View>
                    ))}
                </View>

                {/* {this is Expiry Item} */}

                <View style={styles.expiryHeader}>
                    <Text style={styles.title}>Near Expiry</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewMore}>View More</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.ItemCard}>
                    <View style={styles.tableHeader}>
                        <Text style={styles.headerText}>Item Name</Text>
                        <Text style={styles.headerText}>Expiry Date</Text>
                        <Text style={styles.headerText}>Time Left</Text>
                    </View>

                    {expiryData.map(item => (
                        <View key={item.id} style={styles.row}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons
                                    name="delete-outline"
                                    size={20}
                                    color="#E53935"
                                />
                            </View>

                            <View style={styles.criticalBadge}>

                                <Text style={styles.itemName}>{item.expiryName}</Text>
                                <Text style={styles.criticalText}>WARNING</Text>

                            </View>

                            <Text style={styles.expiry}>{item.expiry}</Text>

                            <Text style={styles.time}>{item.time}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.dashbordContainer}>

                    <View style={styles.topRow}>
                        <View style={styles.textContainer}>
                            <Text style={styles.dashText}>Weekly Sales</Text>

                            <Text style={{ color: 'gray' }}>
                                Growth: +24.5% compared to{"\n"}last week
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.dashButton}>
                            <Text>Last 7 Days</Text>
                            <Ionicons 
                            name="chevron-down" 
                            size={18} 
                            color="#555" />

                        </TouchableOpacity>
                    </View>

                    <View style={styles.graphimage}>
                        <Image
                            source={require('../../assets/Image/graphImage.png')}
                            style={styles.image}
                        />
                    </View>
                </View>

                <View style={styles.RecentContainer}>

                    <View style={styles.stockHeader}>
                        <Text style={styles.title}>Recent Oreders</Text>
                        <TouchableOpacity>
                            <Text style={styles.viewMore}>View All</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.OrderList}>
                        <Text style={styles.dashText}>Marco Verratti</Text>

                        <Text style={{ color: 'gray' }}>
                            #ORD-9024
                        </Text>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <AntDesign
                                name="car"
                                size={22}
                                color="#323b60"
                            />

                            <Text style={{ paddingLeft: 8 }}>Delivery</Text>
                        </View>
                    </View>

                    <View style={styles.OrderList}>
                        <Text style={styles.dashText}>Marco Verratti</Text>

                        <Text style={{ color: 'gray' }}>
                            #ORD-9024
                        </Text>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <AntDesign
                                name="car"
                                size={22}
                                color="#323b60"
                            />

                            <Text style={{ paddingLeft: 8 }}>Delivery</Text>
                        </View>
                    </View>

                    <View style={styles.OrderList}>
                        <Text style={styles.dashText}>Marco Verratti</Text>

                        <Text style={{ color: 'gray' }}>
                            #ORD-9024
                        </Text>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <AntDesign
                                name="car"
                                size={22}
                                color="#323b60"
                            />

                            <Text style={{ paddingLeft: 8 }}>Delivery</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop:'30%'}}>

                </View>
    
            </View>
        </ScrollView >
    )
}

export default DashboardScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F8F9FF"
    },

    header: {
        width: '90%',
        height: 64,
        marginHorizontal: 10,
        marginTop: 20,
        marginLeft: 16,
        paddingRight: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',

        borderColor: '#d9d9e0bd',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,

        elevation: 2,
    },

    headerImage: {
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    menuText: {
        paddingLeft: 15,
        fontSize: 23,
        color: '#323B60',
        fontWeight: 'bold',

    },

    mainCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },

    card: {
        width: '41%',
        height: 162,
        backgroundColor: 'white',
        borderRadius: 24,
        borderWidth: 1,
        paddingTop: 24,
        paddingRight: 24,
        paddingBottom: 24,
        paddingLeft: 6,
        marginHorizontal: 15,

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

    // liveDiv: {
    //     backgroundColor: 'Black',
    //     height: 40,
    //     width: 40,
    // },

    // liveText: {
    //     color: '#323b60',
    //     textAlign: 'right',
    //     fontWeight: 'bold',
    //     paddingTop: 20,
    //     backgroundColor: 'green'

    // },

    OngoingCard: {
        height: 162,
        width: '90%',
        backgroundColor: 'white',
        padding: 24,
        marginHorizontal: 10,
        borderRadius: 24,
        marginTop: 20,
        marginLeft: 16,

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

    Text: {

        paddingTop: 12,
        fontSize: 16,
        color: '#181C21',
    },

    stockContainer: {
        flex: 1,
        // backgroundColor: '#F5F5F8',
        padding: 16,
        marginTop: 20
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },

    button: {
        backgroundColor: '#39406D',
        width: '48%',
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },

    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },

    stockHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        marginHorizontal: 20,
    },

    expiryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        marginHorizontal: 20,
        marginTop: 22
    },


    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#222',
    },

    viewMore: {
        color: '#3D5AFE',
        fontWeight: '600',
        fontSize: 13,
    },

    ItemCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 18,
        overflow: 'hidden',
        marginHorizontal: 15,

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

    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#F0F1F6',
        paddingHorizontal: 1,
        paddingVertical: 14,

        borderColor: '#C7C5CF1A',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.01,
        shadowRadius: 1,

        elevation: 2,
    },

    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
        // flex: 1,
        paddingHorizontal: 15,
    },

    row: {
        flexDirection: 'row',
        paddingHorizontal: 14,
        paddingVertical: 12,
        alignItems: 'center',
    },

    icon: {
        // flex: 1,

    },

    itemName: {
        width: 100,
        fontSize: 16,
        color: '#222',
        // paddingLeft: 20,
        // backgroundColor:'green',
        textAlign: 'left'
    },

    criticalBadge: {
        // backgroundColor: '#F8E1E1',
        alignSelf: 'flex-start',
        // paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        marginTop: 5,
        //     // marginLeft: 25,
        //     flexDirection: 'row',
        //     justifyContent: 'space-between',
        //     alignItems: 'flex-start',
    },

    criticalText: {
        color: '#c41414',
        fontSize: 10,
        fontWeight: 'bold',
        textAlign: 'left'
    },

    category: {
        flex: 1,
        width: 80,
        color: '#777',
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'center'
    },

    status: {
        flex: 1,
        color: '#c41414',
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingHorizontal: 20,
        // backgroundColor:'yellow'
    },

    expiry: {
        flex: 1,
        color: '#777',
        fontSize: 14,
        lineHeight: 18,
    },

    time: {
        flex: 1,
        color: '#c41414',
        fontSize: 11,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingHorizontal: 20,
    
    },

    dashbordContainer: {
        backgroundColor: '#FFFFFF',
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 22,
        padding: 18,
        

        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    dashText: {
        flex: 1,
        color: 'blck',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'left',
    },

    dashButton: {
        backgroundColor: '#EEF2FF',
        height: 30,
        borderRadius: 20,

    },

    graphimage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },

    image: {
        width: '100%',
        height: 180,
    },

    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    RecentContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 25,
        marginHorizontal: 15,

        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },

    OrderList: {
        flex: 1,
        borderRadius: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: '#C7C5CF4D',
        marginHorizontal: 20,
        marginBottom:20,
    }



});


