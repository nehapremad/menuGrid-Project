import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const tabIcons = {
  Home: require('../../../assets/Image/home.png'),
  Menu: require('../../../assets/Image/settings.png'),
  Orders: require('../../../assets/Image/settings.png'),
  Profile: require('../../../assets/Image/wallet.png'),
};

const CustomTab = ({ state, navigation }) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tabButton}
            onPress={() => navigation.navigate(route.name)}>

            <View
              style={[
                styles.divButton,
                isFocused && styles.activeButton,
              ]}>
              <Image
                source={tabIcons[route.name]}
                style={[
                  styles.icon,
                  { tintColor: isFocused ? '#fff' : '#323b60' },
                ]}
              />

              <Text
                style={[
                  styles.label,
                  { color: isFocused ? '#fff' : '#323b60' },
                ]}>
                {route.name}
              </Text>
            </View>

          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CustomTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 80,
    borderRadius: 40,
    marginHorizontal: 10,
    marginBottom: 20,
    elevation: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  tabButton: {
    // flex: 1,
    alignItems: 'center',
  },

  divButton: {
    justifyContent: 'center',
    alignItems: 'center',

  },

  activeButton: {
    backgroundColor: '#323b60',
     width: 75,
    height: 60,
    borderRadius: 30,

  },

  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },

  label: {
    marginTop: 5,
    fontSize: 15,

  },
});