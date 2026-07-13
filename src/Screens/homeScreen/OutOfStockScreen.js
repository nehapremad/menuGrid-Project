import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@react-native-vector-icons/ant-design';
import Ionicons from '@react-native-vector-icons/ionicons';

// const {height} = Dimensions.get('window');

const data = [
    {
        id: 1,
        name: 'Arabica Espresso Beans',
        stock: '0 kg available',
        date: 'Last recordered: May 12, 2024',
        // product: 'barista',
        image: '../../assets/Image/meal-sequence-blog.jpg'
    },

    {
        id: 2,
        name: 'Arabica Espresso Beans',
        stock: '0 kg available',
        date: 'Last recordered: May 12, 2024',
        // product: 'barista',
        image: '../../assets/Image/meal-sequence-blog.jpg'
    },

    {
        id: 3,
        name: 'Arabica Espresso Beans',
        stock: '0 kg available',
        date: 'Last recordered: May 12, 2024',
        // product: 'barista',
        image: '../../assets/Image/meal-sequence-blog.jpg'
    },


]

const OutOfStockScreen = () => {

    const navigation = useNavigation();

    const [isSelectButton, setIsSelectButton] = useState(null)

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>

                    <TouchableOpacity
                        onPress={() => navigation.goBack('Home')}>
                        <View style={styles.childHeader}>

                            <AntDesign style={styles.leftArrowIcon}
                                name="arrow-left"
                                size={18}
                                color="#000" />
                            <Text style={styles.nearText}
                            >Out Of Stock</Text>

                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.searchContainer}>
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
                        }}>Search out-of-stock....</Text>
                    </View>

                    <View style={styles.buttonRow}>

                        <TouchableOpacity onPress={() => setIsSelectButton('Category')}
                            style={[
                                styles.button,
                                {

                                    backgroundColor:
                                        isSelectButton === 'Category' ? '#39406D' : '#D9D9D9',
                                }
                            ]}>

                            <Text
                                style={[
                                    styles.buttonText,

                                    { color: isSelectButton === 'Category' ? '#ffff' : '#000', }
                                ]}>
                                Category
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setIsSelectButton('Sort')}
                            style={[
                                styles.button,
                                {
                                    backgroundColor: isSelectButton === 'Sort' ? '#39406D' : '#D9D9D9',
                                }
                            ]}>

                            <Text
                                style={[
                                    styles.buttonText,
                                    { color: isSelectButton === 'Sort' ? '#ffff' : '#000', }
                                ]}>Sort</Text>

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.totalContainer}>
                    <View style={styles.conatin} >
                        <Text style={styles.totalText}>TOTAL OUT OF STOCK</Text>

                        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
                            <Text style={styles.totalNumText}>24
                            </Text>
                            <Text style={styles.totalItemText}>Items</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.totalContainer}>
                    <View style={styles.conatin} >
                        <Text style={styles.totalText}>MOST DEPLETED CATEGORY</Text>

                        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
                            <Text style={styles.totalNumText}>24
                            </Text>
                            <Text style={styles.beverageText}>Bevearages</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.totalContainer}>
                    <View style={styles.conatin} >
                        <Text style={styles.totalText}>RESTOCK PRIORITY</Text>

                        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
                            <View style={styles.circle}>
                                <Text style={styles.highText}>High
                                </Text>
                            </View>
                            <Text style={styles.urgentText}>Urgent</Text>
                        </View>
                    </View>
                </View>

                {data.map(item => (
                    <View key={item.id} style={styles.stockContainer}>
                        <View style={styles.imgItem}>
                            <Image style={styles.img}
                                source={require('../../assets/Image/meal-sequence-blog.jpg')} />
                        </View>
                        <View style={styles.childContent}>
                            <Text style={styles.arabicaTitle}>{item.name}</Text>
                            <Text style={styles.avaliableTitleText}>{item.stock}</Text>
                            <Text style={styles.lastTitle}>{item.date}</Text>
                            <Text style={styles.avaliableTitleText}>Barista</Text>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.badge}>
                                <Text style={styles.badgeText}></Text>
                            </View>

                            <Text style={styles.hours}></Text>
                        </View>

                        <View style={styles.bottomRow}>
                            <Text style={styles.info}></Text>
                            <Text style={styles.info}></Text>
                        </View>
                    </View>

                ))}

            </View>
        </ScrollView>
    )
}

export default OutOfStockScreen

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

    nearText: {
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

    searchContainer: {
        height: 140,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFFCC',
        // borderColor: '#d9d9e0bd',
        marginTop: 15,

        borderColor: '#B8C2FF33',
        borderWidth: 1,
        borderRadius: 20,
        shadowColor: '#0000000D',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,

        elevation: 2,
    },

    searchBar: {
        height: 40,
        backgroundColor: '#F1F3FB',
        marginHorizontal: 15,
        marginTop: 20,
        borderRadius: 20,
        flexDirection: 'row'
    },

    searchIcon: {
        paddingTop: 15,
        paddingLeft: 15,
        marginTop: 10,
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingHorizontal: 15
    },

    button: {
        backgroundColor: '#39406D',
        width: '48%',
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',

        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.15,
        // shadowRadius: 4,
        // elevation: 4,
    },

    buttonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
    },

    totalContainer: {
        height: 100,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFFCC',
        marginTop: 20,

        borderColor: '#B8C2FF33',
        borderWidth: 1,
        borderRadius: 20,
        shadowColor: '#0000000D',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,

        elevation: 2,
    },


    conatin: {
        paddingTop: 10,
        paddingLeft: 20,
        // paddingBottom:20
    },

    totalText: {
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 20,
    },

    totalNumText: {
        fontSize: 24,
        fontWeight: '600',
        paddingTop: 5,
        paddingLeft: 20,
        flexDirection: 'row',
        color: '#BA1A1A'
    },

    totalItemText: {
        fontSize: 12,
        paddingTop: 18,
        paddingLeft: 5,

    },

    beverageText: {
        fontSize: 26,
        paddingTop: 6,
        paddingLeft: 6,
        color: '#4253C3'
    },

    circle: {
        height: 30,
        width: 30,
        backgroundColor: '#FFDAD6',
        borderRadius: 20,
        marginTop: 6,
        marginLeft: 17
    },

    highText: {
        fontSize: 8,
        color: "#93000A",
        paddingLeft: 7,
        paddingTop: 10
    },

    urgentText: {
        fontSize: 28,
        paddingLeft: 5,
        color: '#181C21'
    },

    stockContainer: {
        flex: 1,
        marginLeft: 16,
        backgroundColor: 'white',
        height: 118,
        marginTop: 20,
        marginBottom: 5,
        marginHorizontal: 15,
        flexDirection: 'row',

        borderRadius: 20,
        shadowColor: '#C7C5CF1A',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,

        elevation: 2,
    },


    img: {
        width: 55,
        height: 55,
        borderRadius: 18,

    },

    imgItem: {
        width: 40,
        paddingLeft: 20,
        paddingTop: 20,
        justifyContent: 'center',
    },

    childContent: {
        justifyContent: 'center',
        paddingLeft: 25,
        paddingBottom: 20,
    },

    arabicaTitle: {
        paddingTop: 20,
        paddingLeft: 25,
        fontSize: 14,
        color: '#111',
    },


    lastTitle: {
        // paddingTop: 20,
        paddingLeft: 25,
        fontSize: 16,
        color: 'gray',
    },

    avaliableTitleText: {
        color: 'red',
        paddingLeft: 25,
    },

    row: {

        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },

    badge: {
        backgroundColor: '#FDECEC',
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 7,
    },

    badgeText: {
        color: '#D62828',
        fontWeight: '700',
        fontSize: 13,
        letterSpacing: 0.5,
    },

    hours: {
        marginLeft: 12,
        color: '#E53935',
        fontSize: 16,
        fontWeight: '500',
    },

    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingBottom: 15,
        paddingHorizontal: 10

    },

    info: {
        fontSize: 16,
        color: '#5F5F5F',
        fontWeight: '500',
        paddingRight: 5,
    },


    menuBtn: {
        paddingTop: 12,
        paddingLeft: 30,
        // backgroundColor: 'black'

    },


})