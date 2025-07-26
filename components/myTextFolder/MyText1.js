import React from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';

const MyText1 = () => {
  const handleEvent = () => {
    Alert.alert('Hello!', 'The text was clicked.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={handleEvent}>
        Hello World Now 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'blue',
  },
});

export default MyText1;
