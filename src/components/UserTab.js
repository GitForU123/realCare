import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import customColor from '../../assets/colors/customColor';
import DoctorTab from './DoctorTab';
import PatientTab from './PatientTab';

const UserTab = () => {
  // const [isFocused, setFocus] = useState(false)
  const [isDoctorFocused, setDoctorFocused] = useState(true);
  const [isPatientFocused, setPatientFocused] = useState(false);

  const doctorTabClicked = () => {
    console.log('doc tab clicked');
    if (!isDoctorFocused) {
      setDoctorFocused(true);
    }

    setPatientFocused(false);
    console.log(isDoctorFocused, isPatientFocused);
  };
  const patientTabClicked = () => {
    console.log('patient tab clicked');
    if (!isPatientFocused) {
      setPatientFocused(true);
    }
    setDoctorFocused(false);
    console.log(isDoctorFocused, isPatientFocused);
  };

  //   const toggleFocus = () => {
  //       if(!isDoctorFocused){
  //           isDoctorFocused = true
  //           isPatientFocused = false
  //       }else if(!isPatientFocused){

  //       }
  //     console.log(isDoctorFocused, isPatientFocused);
  //   };
  return (
    <View>
      <View style={styles.tabWrapper}>
        <View
          style={[styles.tabStyle, isDoctorFocused && styles.focusTabStyle]}
          onStartShouldSetResponder={() => doctorTabClicked()}>
          <Text
            style={[
              styles.tabTextStyle,
              isDoctorFocused && styles.focusTextStyle,
            ]}>
            Doctors
          </Text>
        </View>
        <View
          style={[styles.tabStyle, isPatientFocused && styles.focusTabStyle]}
          onStartShouldSetResponder={() => patientTabClicked()}>
          <Text
            style={[
              styles.tabTextStyle,
              isPatientFocused && styles.focusTextStyle,
            ]}>
            Patients
          </Text>
        </View>
      </View>
      {isDoctorFocused ? <DoctorTab /> : <PatientTab />}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  tabWrapper: {
    flexDirection: 'row',
    height: 46,
  },
  tabStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: customColor.border,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderRightColor: customColor.border,
  },
  tabTextStyle: {
    fontFamily: 'Monsterrat-Bold',
    fontSize: 18,
  },
  focusTextStyle: {
    color: customColor.primaryColor,
  },
  focusTabStyle: {
    borderBottomColor: customColor.primaryColor,
    borderBottomWidth: 2,
  },
});

export default UserTab;
