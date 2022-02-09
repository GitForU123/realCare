import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import customColor from '../../assets/colors/customColor';

const AdminHeader = props => {
  const {nav} = props;
  return (
    <View style={styles.headerWrapper}>
      <MaterialIcons
        name="arrow-back"
        onPress={() => nav.goBack()}
        size={29}
        color={customColor.white}
        style={styles.iconStyle}
      />
      <Text style={styles.headerTitle}>Dashboard</Text>
      <MaterialIcons
        name="add"
        size={29}
        color={customColor.white}
        onPress={() => nav.navigate('AddDoctor')}
        style={styles.iconStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    backgroundColor: customColor.primaryColor,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontFamily: 'Monsterrat-Bold',
    fontSize: 20,
    color: customColor.white,
  },
  iconStyle: {
    // color: customColor.white,
    // height: 10,
    // width: 29,
    // top: 41,
    // left: 57,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});

export default AdminHeader;
