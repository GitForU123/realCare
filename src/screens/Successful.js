import React from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

function Successful(props) {
  return (
    <View>
      <Image style={styles.Logo} source={require('../assets/success.png')} />
      <Text style={styles.text}>Successfull</Text>
    </View>
  );
}
const styles = {
  Logo: {
    position: 'absolute',
    width: 278,
    height: 261,
    left: 41,
    top: 152,
  },
  text: {
    position: 'absolute',
    width: 151,
    height: 29,
    left: 125,
    top: 461,
    font: 'Roboto',
    style: 'normal',
    color: '#27AE60',
    weight: 'bold',
    fontSize: 25,
  },
};

/*font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 29px;
*/

export default Successful;
