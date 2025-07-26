// screens/SignUpScreen.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import SignUpForm from '../components/SignUpForm';

const SignUpScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SignUpForm navigation={navigation} />
    </SafeAreaView>
  );
};

export default SignUpScreen;
