import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import AntDesign from '@react-native-vector-icons/ant-design';
import Ionicons from "@react-native-vector-icons/ionicons";

const FreshFarmsScreen = () => {

     const [selectedButton, setSelectedButton] = useState('All item')
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
                        <Text style={styles.InvoiceText}
                        >Fresh Farms Invoices</Text>
                    </View>
                </TouchableOpacity>
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
              onPress={() => setSelectedButton('Paid')}
              style={[
                styles.itemsButton,
                {
                  backgroundColor:
                    selectedButton === 'Paid' ? '#39406D' : '#D9D9D9',
                },
              ]}>
              <Text
                style={[
                  styles.rowText,
                  { color: selectedButton === 'Paid' ? '#fff' : '#000' },
                ]}>
                Paid
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectedButton('Unpaid')}
              style={[
                styles.itemsButton,
                {
                  backgroundColor:
                    selectedButton === 'Unpaid' ? '#39406D' : '#D9D9D9',
                },
              ]}>
              <Text
                style={[
                  styles.rowText,
                  { color: selectedButton === 'Unpaid' ? '#fff' : '#000' },
                ]}>
                Unpaid
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectedButton('Overd Due')}
              style={[
                styles.itemsButton,
                {
                  backgroundColor:
                    selectedButton === 'Overd Due' ? '#39406D' : '#D9D9D9',
                },
              ]}>
              <Text
                style={[
                  styles.rowText,
                  { color: selectedButton === 'Overd Due' ? '#fff' : '#000' },
                ]}>
                Overd Due
              </Text>
            </TouchableOpacity>
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
        </ScrollView>
    )
}

export default FreshFarmsScreen

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

    InvoiceText: {
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
        color: '#000',
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
        height: 50,
        borderRadius: 14,
        backgroundColor: '#343B67',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal:30
    },

    paymentText: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '500',
    },

    searchBar: {
    height: 45,
    backgroundColor: '#F1F3FB',
    marginHorizontal: 15,
    marginVertical:10,
    borderRadius: 10,
    flexDirection: 'row'
  },

  searchIcon: {
    paddingtop: 15,
    paddingLeft: 15,
    marginTop: 10,
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
})