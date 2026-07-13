import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from "@react-native-vector-icons/ant-design";
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons'
import Ionicons from '@react-native-vector-icons/ionicons'
import { useNavigation } from '@react-navigation/native';


const NearExpiryScreen = () => {

  const [selectedButton, setSelectedButton] = useState('All item')

  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>

          <TouchableOpacity
            onPress={() => navigation.goBack('NearExpiry')}>
            <View style={styles.childHeader}>

              <AntDesign style={styles.leftArrowIcon}
                name="arrow-left"
                size={18}
                color="#000" />
              <Text style={styles.nearText}>Near Expiry</Text>

            </View>
          </TouchableOpacity>
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

          <View style={styles.bottonRowContainer}>

            <TouchableOpacity
              onPress={() => setSelectedButton('All Items')}
              style={[
                styles.itemsButton,
                {
                  backgroundColor:
                    selectedButton === 'All Items' ? '#39406D' : '#D9D9D9',
                },
              ]}>
              <Text
                style={[
                  styles.rowText,
                  { color: selectedButton === 'All Items' ? '#fff' : '#000' },
                ]}>
                All Items
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectedButton('24h Priority')}
              style={[
                styles.itemsButton,
                {
                  backgroundColor:
                    selectedButton === '24h Priority' ? '#39406D' : '#D9D9D9',
                },
              ]}>
              <Text
                style={[
                  styles.rowText,
                  { color: selectedButton === '24h Priority' ? '#fff' : '#000' },
                ]}>
                24h Priority
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setSelectedButton('Next 3 Days')}
              style={[
                styles.itemsButton,
                {
                  backgroundColor:
                    selectedButton === 'Next 3 Days' ? '#39406D' : '#D9D9D9',
                },
              ]}>
              <Text
                style={[
                  styles.rowText,
                  { color: selectedButton === 'Next 3 Days' ? '#fff' : '#000' },
                ]}>
                Next 3 Days
              </Text>
            </TouchableOpacity>

          </View>


          <View style={styles.content}>
            <View style={styles.imgItem}>
              <Image style={styles.img}
                source={require('../../assets/Image/meal-sequence-blog.jpg')} />
            </View>

            <View style={styles.childContent}>

              {/* <TouchableOpacity style={styles.menuBtn}>
                <MaterialCommunityIcons
                  style={{ paddingLeft: '30%' }}

                  name="dots-vertical"
                  size={24}
                  color="#555"
                />
              </TouchableOpacity> */}
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

          <View style={styles.content}>
            <View style={styles.imgItem}>
              <Image style={styles.img}
                source={require('../../assets/Image/meal-sequence-blog.jpg')} />
            </View>

            <View style={styles.childContent}>

              {/* <TouchableOpacity style={styles.menuBtn}>
                <MaterialCommunityIcons
                  style={{ paddingLeft: '30%' }}

                  name="dots-vertical"
                  size={24}
                  color="#555"
                />
              </TouchableOpacity> */}
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


          <View style={styles.content}>
            <View style={styles.imgItem}>
              <Image style={styles.img}
                source={require('../../assets/Image/meal-sequence-blog.jpg')} />
            </View>

            <View style={styles.childContent}>

              {/* <TouchableOpacity style={styles.menuBtn}>
                <MaterialCommunityIcons
                  style={{ paddingLeft: '30%' }}

                  name="dots-vertical"
                  size={24}
                  color="#555"
                />
                </TouchableOpacity> */}
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

    borderColor: '#C7C5CF1A',
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
    paddingBottom: 20,

    shadowColor: '#C7C5CF1A',
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
    paddingTop: 10,
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

  bottonRowContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },

  itemsButton: {
    height: 30,
    width: '30%',
    backgroundColor: '#323B60',
    marginLeft: 10,
    borderRadius: 20,
    marginBottom: 15,
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
    borderRadius: 20,
    height: 118,
    marginTop: 20,
    marginBottom: 5,
    marginHorizontal: 15,
    flexDirection: 'row',

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
  },

  childContent: {
    paddingLeft: 40,
    width: '90%',
    paddingBottom: 30,
    // paddingHorizontal:30,

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