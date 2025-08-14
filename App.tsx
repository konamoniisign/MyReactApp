// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/myTextFolder/LoginScreen';
import SignUpForm from './components/myTextFolder/SignUpForm';


// import HomeScreen from './components/myTextFolder/HomeScreen';
import Category from './components/myTextFolder/Category';
import ManScreen from './components/myTextFolder/ManScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignUp" screenOptions={{ headerShown: false }}>
       
        <Stack.Screen name="SignUp" component={SignUpForm} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
         <Stack.Screen name ="Category" component={Category}/>
        <Stack.Screen name ="Man" component={ManScreen}/>
         {/* <Stack.Screen name='Home'component={Home}/> */}
      </Stack.Navigator>
    
  
    </NavigationContainer>
  );
};



export default App;
