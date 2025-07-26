 
// src/components/ArticleCard.js
import React from 'react';
import {  Text, Image, StyleSheet, TouchableOpacity, GestureResponderEvent } from 'react-native';

interface ArticleCardProps {
  title: string;
  image: string;
  onPress: (event: GestureResponderEvent) => void;
}
const ArticleCard:React.FC<ArticleCardProps> = ({ title, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.link}>Read Article ➔</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  link: {
    color: '#D700B9',
    fontWeight: '500',
  },
});

export default ArticleCard;
