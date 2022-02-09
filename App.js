import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import ParentNavigator from './navigation/StackNavigator';

function App() {
  return (
    <NavigationContainer>
      <ParentNavigator />
    </NavigationContainer>
  );
}

export default App;
