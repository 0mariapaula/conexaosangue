
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './login'; // Supondo que sua tela de login esteja em LoginScreen.js
import Cadastro from './cadastro';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator initialRouteName="Cadastro" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={LoginScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;