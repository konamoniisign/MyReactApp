 
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import Feather from 'react-native-vector-icons/Feather'



const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={18} color="#aaa" style={styles.icon} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
