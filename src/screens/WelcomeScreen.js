import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Welcome to Doctor's Appointment</Text>
      <View style={styles.ReactangleWrapper}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/doctor1.png')}
        />
        <Text style={styles.rectangelTextStyle}>Sign in as Doctor</Text>
      </View>
      <View style={styles.ReactangleWrapper}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/patient.png')}
        />
        <Text style={styles.rectangelTextStyle}>Sign in as Patient</Text>
      </View>
      <Text onPress={() => navigation.navigate('Admin')} style={styles.admin}>
        sign in as Admin
      </Text>
      <Text
        onPress={() => navigation.navigate('PatientSignUp')}
        style={styles.patientsignup}>
        Sign up as patient
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    marginTop: 30,
    marginLeft: 20,
    width: 281,
    height: 53,
    textAlign: 'center',
    color: '#2D9CDB',
    fontWeight: 'bold',
    lineHeight: 26,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },
  ReactangleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 226,
    height: 136,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#F8F5F5',
    borderRadius: 0.5,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 8,
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowRadius: 4,
    shadowOpacity: 1,
  },

  imageStyle: {
    height: 87,
    width: 65,
  },
  rectangelTextStyle: {
    color: '#2D9CDB',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 23.44,

    height: 23,
    width: 158,
    fontStyle: 'normal',
  },

  admin: {
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    fontStyle: 'normal',
    color: '#2D9CDB',
    width: 104,
    height: 16,
  },
  patientsignup: {
    color: '#27AE90',
    height: 23,
    width: 162,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 20,
    lineHeight: 23,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
