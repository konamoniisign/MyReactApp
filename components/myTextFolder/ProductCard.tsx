 
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



type Props = {
  name: string;
  price: string;
  image: any;
};

const ProductCard = ({ name, price, image }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        {/* <Feather name="heart" size={18} color="#888" /> */}
      </View>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '48%',
    padding: 10,
    elevation: 3,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 140,
    borderRadius: 8,
    marginBottom: 10,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
