import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// 1️⃣ Define all routes and their params
type RootStackParamList = {
  Category: undefined;
  Man: undefined;
};

// 2️⃣ Define type for navigation prop
type CategoryScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Category'
>;

type Props = {
  navigation: CategoryScreenNavigationProp;
};

const { width, height } = Dimensions.get('window');

const categories = [
  'Tops',
  'Trousers',
  'Dresses',
  'Jeans',
  'Skirts',
  'Jackets',
  'Accessories',
  'Cosmetics',
];

const Category: React.FC<Props> = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/women.jpg')}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.navTabs}>
          <Text style={[styles.navTab, styles.activeTab]}>Woman</Text>

          {/* Navigate to Man Screen */}
          <TouchableOpacity onPress={() => navigation.navigate('Man')}>
            <Text style={styles.navTab}>Man</Text>
          </TouchableOpacity>

          <Text style={styles.navTab}>Kids</Text>
        </View>

        <ScrollView contentContainerStyle={styles.menuList}>
          {categories.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
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
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  navTabs: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 40,
  },
  navTab: {
    fontSize: 20,
    color: '#ccc',
    fontWeight: '500',
  },
  activeTab: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  menuList: {
    justifyContent: 'flex-start',
  },
  menuItem: {
    marginVertical: 10,
  },
  menuText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '400',
  },
});

export default Category;
