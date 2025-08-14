 import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SearchBar from './SearchBar';
import FilterChip from './FilterChip';
import ProductCard from './ProductCard';
import { BottomTabs } from 'react-native-screens';

const filters = ['Trending Items', 'Summer Wear', 'Hot Deals'];

const products = [
  { id: '1', name: 'White Top', price: '$199', image: require('../../assets/cart2.jpg') },
  { id: '2', name: 'Black Midi', price: '$299', image: require('../../assets/cart3.jpg') },
  { id: '3', name: 'Gray Blazer', price: '$249', image: require('../../assets/cart4.jpg') },
  { id: '4', name: 'Green Jacket', price: '$179', image: require('../../assets/cart5.jpg') },
];

const HomeScreen = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={24} />
        <Text style={styles.headerText}>Welcome Alexa!</Text>
        <Ionicons name="notifications-outline" size={24} />
      </View>

      {/* Search */}
      <SearchBar />

      {/* Filters */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
        {filters.map((filter) => (
          <FilterChip
            key={filter}
            label={filter}
            active={filter === activeFilter}
            onPress={() => setActiveFilter(filter)}
          />
        ))}
      </ScrollView>

      {/* Products */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.productRow}
        contentContainerStyle={styles.productList}
        renderItem={({ item }) => (
          <ProductCard name={item.name} price={item.price} image={item.image} />
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Tabs */}
      <BottomTabs />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  filters: {
    marginBottom: 16,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productList: {
    paddingBottom: 100,
  },
});
