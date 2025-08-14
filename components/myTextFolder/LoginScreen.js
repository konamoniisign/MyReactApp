import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async ()  => {
  if (!email || !password) {
    Alert.alert('Validation Error', 'Email and Password are required');
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    Alert.alert('Validation Error', 'Invalid email format');
    return;
  }

  if (password.length < 6) {
    Alert.alert('Validation Error', 'Password must be at least 6 characters');
    return;
  }

  // Dummy login success
  Alert.alert('Login Success', 'You are logged in successfully!', [
    {
      text: 'Continue',
      onPress: () => navigation.replace('Category'),
    },
  ]);
};


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            secureTextEntry={!showPass}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPass(!showPass)}>
            <Icon
              name={showPass ? 'visibility' : 'visibility-off'}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.footerLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fefefe' },
  scrollContainer: { padding: 20, justifyContent: 'center', flexGrow: 1 },
  title: {
    fontSize: 26, fontWeight: 'bold',
    textAlign: 'center', marginBottom: 30, color: '#333'
  },
  input: {
    height: 50, borderColor: '#bbb', borderWidth: 1, borderRadius: 8,
    paddingHorizontal: 15, marginBottom: 15, backgroundColor: '#fff'
  },
  passwordContainer: {
    flexDirection: 'row', alignItems: 'center',
    borderColor: '#bbb', borderWidth: 1, borderRadius: 8,
    paddingHorizontal: 15, marginBottom: 15, backgroundColor: '#fff'
  },
  passwordInput: {
    flex: 1, height: 50,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  buttonText: {
    color: '#fff', fontSize: 16, fontWeight: 'bold',
  },
  footer: {
    marginTop: 20, flexDirection: 'row',
    justifyContent: 'center', alignItems: 'center'
  },
  footerText: {
    color: '#333'
  },
  footerLink: {
    color: '#4CAF50', fontWeight: 'bold'
  }
});

export default LoginScreen;
