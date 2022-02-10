import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const PatientSignup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.logoStyle}
        source={require('../../assets/images/patient.png')}
      />

      <TextInput
        style={[styles.input]}
        placeholder="Name"
        onChangeText={newText => setName(newText)}
        defaultValue=""
      />

      <TextInput
        style={[styles.input]}
        placeholder="Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue=""
      />

      <TextInput
        style={[styles.input]}
        placeholder="Mobile"
        onChangeText={newText => setMobile(newText)}
        defaultValue=""
      />

      <TextInput
        style={[styles.input]}
        placeholder="Password"
        onChangeText={newText => setPassword(newText)}
        defaultValue=""
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('sign In button clicked')}>
        <Text style={styles.buttontext}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 8,
    padding: 8,

    backgroundColor: '#fff',
    borderColor: '#27AE60',
    borderWidth: 2,
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    alignSelf: 'center',
    width: 304,
    height: 35,

    backgroundColor: '#6FCF97',

    borderRadius: 4,
  },
  buttontext: {
    paddingVertical: 5,
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,

    color: '#F2F2F2',
  },

  logoStyle: {
    width: 65,
    height: 88,
    margin: 20,
    alignSelf: 'center',
  },
});
export default PatientSignup;
/*
font-family: Roboto,
font-style: normal,
font-weight: bold,
font-size: 20px,
line-height: 23px,

color: #F2F2F2,

mix-blend-mode: normal;

*/
