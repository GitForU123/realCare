import React, {useState} from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const PatientSignup = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');

  return (
    <View>
      <Image
        style={styles.Logo}
        source={require('../../assets/images/patient.png')}
      />

      <TextInput
        style={[styles.input, {top: 142, left: 28}]}
        placeholder="Name"
        onChangeText={newText => setName(newText)}
        defaultValue=""
      />

      <TextInput
        style={[styles.input, {top: 186, left: 28}]}
        placeholder="Email"
        onChangeText={newText => setEmail(newText)}
        defaultValue=""
      />

      <TextInput
        style={[styles.input, {top: 225, left: 28}]}
        placeholder="Mobile"
        onChangeText={newText => setMobile(newText)}
        defaultValue=""
      />

      <TextInput
        style={[styles.input, {top: 272, left: 28}]}
        placeholder="Password"
        onChangeText={newText => setPassword(newText)}
        defaultValue=""
      />
      <TouchableOpacity onPress={() => navigation.navigate()}>
        <View style={[styles.button]}>
          <Text style={styles.buttontext}>Create Account</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  input: {
    padding: 0,
    width: 304,
    height: 32,
    backgroundColor: '#fff',

    borderColor: '#27AE60',
    position: 'absolute',

    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    width: 304,
    height: 32,

    backgroundColor: '#6FCF97',

    borderRadius: 4,
  },
  buttontext: {
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    color: '#F2F2F2',
  },

  Logo: {
    position: 'absolute',
    width: 65,
    height: 88,
    left: 148,
    top: 33,
  },
};
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
