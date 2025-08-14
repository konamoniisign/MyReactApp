import React from 'react';
import {

  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import ArticleCard from './ArticleCard';

// Fixed Unsplash image URL (must point to actual image)
const bannerImg =
  'https://images.unsplash.com/photo-https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D-00dcc994a43e?auto=format&fit=crop&w=1350&q=80';

const sampleImages: string[] = [
  'https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.webp?a=1&b=1&s=612x612&w=0&k=20&c=tStWgNSFBAGPyu4gfJfDEjqMPDnvgqWUkIPyZYGS090=',
  'https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.webp?a=1&b=1&s=612x612&w=0&k=20&c=tStWgNSFBAGPyu4gfJfDEjqMPDnvgqWUkIPyZYGS090=',
  'https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.webp?a=1&b=1&s=612x612&w=0&k=20&c=tStWgNSFBAGPyu4gfJfDEjqMPDnvgqWUkIPyZYGS090=',
  'https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.webp?a=1&b=1&s=612x612&w=0&k=20&c=tStWgNSFBAGPyu4gfJfDEjqMPDnvgqWUkIPyZYGS090=',
];

const HomeScreen2: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Banner Image */}
      <Image source={{ uri: bannerImg }} style={styles.banner} />

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Explore Gallery</Text>

      {/* Image Gallery */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.galleryScroll}>
        {sampleImages.map((img: string, index: number) => (
          <Image key={`image-${index}`} source={{ uri: img }} style={styles.galleryImage} />
        ))}
      </ScrollView>

           <Text style={styles.sectionTitle}>Recommended Articles</Text>
      <View>
        <ArticleCard
          title="The Beauty of Nature"
          image="https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.webp?a=1&b=1&s=612x612&w=0&k=20&c=tStWgNSFBAGPyu4gfJfDEjqMPDnvgqWUkIPyZYGS090="
          onPress={() => console.log('Article 1 clicked')}
        />
        <ArticleCard
          title="Learn React Native"
          image="https://via.placeholder.com/300x150.png?text=React+Native"
          onPress={() => console.log('Article 2 clicked')}
        />
      </View>
    </ScrollView>
  );
};

const windowWidth: number = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
banner: {
  width: windowWidth,
  height: 200,
  resizeMode: 'cover',
},
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    color: '#333',
  },
  galleryScroll: {
    paddingHorizontal: 10,
  },
  galleryImage: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
});

export default HomeScreen2;
