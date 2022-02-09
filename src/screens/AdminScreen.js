import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AdminHeader from '../components/AdminHeader';
import UserTab from '../components/UserTab';

const AdminScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AdminHeader nav={navigation} />
      <UserTab />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AdminScreen;
