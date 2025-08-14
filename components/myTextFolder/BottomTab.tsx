 
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTabBar = () => {
  return (
    <View style={styles.tabBar}>
      <Ionicons name="home" size={24} color="#fff" />
      <Ionicons name="heart-outline" size={24} color="#fff" />
      <Ionicons name="cart-outline" size={24} color="#fff" />
      <Ionicons name="person-outline" size={24} color="#fff" />
    </View>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3b2e2e',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
