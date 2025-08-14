import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ManScreen = () => {
  const mensCategories = ['Shirts', 'Trousers', 'Jackets', 'Shoes', 'Watches', 'Accessories'];

  return (
    <ImageBackground
      source={require('../../assets/men1.jpg')}
      resizeMode="cover"
      style={styles.background}
    >
      {/* Dark overlay so text is more visible */}
      <View style={styles.overlay}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.title}>Men's Collection</Text>
          {mensCategories.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image
                source={require('../../assets/men9.jpg')} // ✅ fixed path to local image
                style={styles.image}
              />
              <Text style={styles.cardText}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)', // semi-transparent black overlay
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#fff', // white text for visibility
  },
  card: {
    // backgroundColor: 'rgba(255,255,255,0.85)', // transparent white for card
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff'
  },
});

export default ManScreen;
