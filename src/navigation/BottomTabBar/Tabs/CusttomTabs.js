import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
const tabIcons = {
  Home: require('../../assets/Images/home.png'),
  Menu: require('../../assets/Images/information-button.png'),
  Oders: require('../../assets/Images/settings.png'),
  Profile: require('../../assets/Images/wallet.png'),
};

const CustomTabs = ({ state, navigation }) => {
  return (

    <>

     <View style={styles.container}>
      {state.routes.map((route, index) => {

        const isFocused = state.index === index;

        const onPress = () => {
          navigation.navigate(route.name);
        }

        return (
          <TouchableOpacity index={route.index} onPress={onPress} style={styles.tabButton}>
            {route.name}
            <Image source={tabIcons[route.name]}

              style={{
                tintColor: isFocused ? "blue" : "gray",
                width: 24,
                height: 24,
              }} />

              <Image source={tabIcons[route.name]}

              style={{
                tint: route.name ==='home',
                marginLeft:20,
                width: 24,
                height: 24,
              }} />

            <Text
              style={{
                color: isFocused ? 'blue' : 'gray',
                fontWeight: isFocused ? 'bold' : 'normal',
              }}
            >
              {route.name}
            </Text>
          </TouchableOpacity>

        );
      })}
    </View>
    
    
    </>
   
  );
}
export default CustomTabs

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#fff',
    elevation: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});