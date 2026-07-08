import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from "@react-native-vector-icons/ant-design";
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons'
import Ionicons from '@react-native-vector-icons/ionicons'


const NearExpiryScreen = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.header}>

          <View style={styles.childHeader}>
            <AntDesign style={styles.leftArrowIcon}
              name="arrow-left"
              size={18}
              color="#000" />
            <Text style={styles.nearText}>Near Expiry</Text>

          </View>
        </View>

        <View style={styles.alertContainer}>
          <View style={styles.alertCard}>
            <View style={styles.alertIcon}>
              <MaterialCommunityIcons
                name="alert"
                size={22}
                color="#BA1A1A"

              />
            </View>
            {/* <Text style={{ marginLeft: '20%', flexDirection: 'row' }}>Critical Alert</Text> */}
            {/* <Text style={styles.alertText}>12 Items require immediate action.{"\n"}5 tems expiring within 24 hours.</Text> */}

            <Text style={styles.alertText}>
              <Text style={styles.boldText}>12 Items</Text> require immediate action.
            </Text>

            <Text style={styles.alertText}>
              <Text style={styles.redText}>5 items</Text> expiring within 24 hours.
            </Text>
  

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
          }}>Search inventory items....</Text>
        </View>

        <View style={styles.rowContaine}>
          <TouchableOpacity style={styles.itemsButton}>
            <Text style={styles.rowText}> All Items </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemsButton}>
            <Text style={styles.rowText}> 24h Priority </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemsButton}>
            <Text style={styles.rowText}> Next 3 Days </Text>
          </TouchableOpacity>

        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.imgItem}>
          <Image style={styles.img}
            source={require('../../assets/Image/imagess.jpg')} />
        </View>

        <View style={styles.childContent}>

          {/* <TouchableOpacity style={styles.menuBtn}>
         <MaterialCommunityIcons
        style={{paddingLeft:'30%'}}

          name="dots-vertical"
          size={24}
          color="#555"
        />
      </TouchableOpacity>  */}
          <Text style={styles.title}>Chicken Breast</Text>

          <View style={styles.row}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>CRITICAL</Text>
            </View>

            <Text style={styles.hours}>24 Hours Left</Text>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.info}>Qty: 5.2 kg</Text>
            <Text style={styles.info}>Exp: Oct 24</Text>
          </View>
        </View>

        <View style={styles.imgItem}>
          <Image style={styles.img}
            source={require('../../assets/Image/imagess.jpg')} />
        </View>

        <View style={styles.childContent}>

          {/* <TouchableOpacity style={styles.menuBtn}>
         <MaterialCommunityIcons
        style={{paddingLeft:'30%'}}

          name="dots-vertical"
          size={24}
          color="#555"
        />
      </TouchableOpacity>  */}
          <Text style={styles.title}>Chicken Breast</Text>

          <View style={styles.row}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>CRITICAL</Text>
            </View>

            <Text style={styles.hours}>24 Hours Left</Text>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.info}>Qty: 5.2 kg</Text>
            <Text style={styles.info}>Exp: Oct 24</Text>
          </View>
        </View>

        <View style={styles.childContent}>

          {/* <TouchableOpacity style={styles.menuBtn}>
         <MaterialCommunityIcons
        style={{paddingLeft:'30%'}}

          name="dots-vertical"
          size={24}
          color="#555"
        />
      </TouchableOpacity>  */}
          <Text style={styles.title}>Chicken Breast</Text>

          <View style={styles.row}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>CRITICAL</Text>
            </View>

            <Text style={styles.hours}>24 Hours Left</Text>
          </View>

          <View style={styles.bottomRow}>
            <Text style={styles.info}>Qty: 5.2 kg</Text>
            <Text style={styles.info}>Exp: Oct 24</Text>
          </View>
        </View>


      </View>


    </View>
    </ScrollView >

  )
}

export default NearExpiryScreen

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
    fontSize: 22,
    fontWeight: 'bold'

  },

  childHeader: {
    flex: 1,
    flexDirection: 'row',
  },

  leftArrowIcon: {
    paddingLeft: 20,
    paddingTop: 10
  },

  alertCard: {
    height: 162,
    width: '90%',
    backgroundColor: 'white',
    padding: 24,
    marginHorizontal: 10,
    borderRadius: 24,
    marginTop: 20,
    marginLeft: 16,
    // marginBottom: 20,
    paddingBottom:20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,

    elevation: 2,
  },

  alertIcon: {
    height: 44,
    width: 44,
    borderRadius: 15,
    backgroundColor: '#FFDAD6',
    padding: 12,
    flexDirection: 'row'

  },

  alertText: {
    // paddingTop: 10,
    fontSize: 16,
    color: '#181C21',
    fontWeight: 'bold'
  },

    boldText: {
    fontWeight: '700',
    color: '#111',
  },

  redText: {
    color: '#D32F2F',
    fontWeight: '700',
    paddingTop:10,
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
    paddingtop: 15,
    paddingLeft: 15,
    marginTop: 10,


  },

  rowContaine: {
    flexDirection: 'row',
    marginTop: 12,
  },

  itemsButton: {
    height: 30,
    width: '30%',
    backgroundColor: '#323B60',
    marginLeft: 10,
    borderRadius: 20,
    marginBottom: 20,
  },

  rowText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
    paddingVertical: 5,
  },

  content: {
    flex: 1,
    marginLeft: 16,
    backgroundColor: 'white',
    borderRadious: 20,
    height: 118,
    marginTop: 23,
    marginBottom: 20,
    marginHorizontal: 15,
    flexDirection: 'row',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,

    elevation: 2,
  },


  img: {
    width: 50,
    height: 50,
    borderRadius: 18,
  },

  imgItem: {
    width: 40,
    paddingLeft: 20,
    paddingTop: 20,
  },

  childContent: {
    paddingLeft: '10%',
    width: '90%',
    paddingBottom: 30

  },


  title: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
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
    marginTop: 16,
    paddingBottom: 15
  },

  info: {
    fontSize: 16,
    color: '#5F5F5F',
    fontWeight: '500',
    paddingRight: 5,
  },

  menuBtn: {
    paddingtop: 12,
    paddingLeft: 30,
    // backgroundColor: 'black'

  },
})