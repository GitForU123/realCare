import React from 'react';
import {View, Text, Button} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is Admin Screen</Text>
      <Button
        title="Go To admin Page"
        onPress={() => navigation.navigate('Admin')}
      />
      <Button
        title="Go To Patient SignUP Page"
        onPress={() => navigation.navigate('PatientSignUp')}
      />
    </View>
  );
};

export default WelcomeScreen;
