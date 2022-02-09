import React from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '../src/screens/WelcomeScreen';
import AdminScreen from '../src/screens/AdminScreen';
import {StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PatientSignup from '../src/screens/PatientSignup';
import PatientSignIn from '../src/screens/PatientSignIn';
import AddDoctor from '../src/screens/AddDoctor';

const Stack = createStackNavigator();

const ParentNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="WelCome"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Admin"
        component={AdminScreen}
        options={{
          headerTitle: 'Dashboard',
          headerRight: () => (
            <View>
              <MaterialIcons
                name="add"
                size={25}
                color="coral"
                onPress={() => console.log('menu clicked')}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen name="PatientSignUp" component={PatientSignup} />
      <Stack.Screen name="PatientSignIn" component={PatientSignIn} />
      <Stack.Screen name="AddDoctor" component={AddDoctor} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    headerShown: false,
    headerTitle: 'Dashboard',
  },
});
export default ParentNavigator;
