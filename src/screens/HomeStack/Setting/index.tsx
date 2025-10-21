import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import AppButton from '../../../components/AppButton';
import { logout } from '../../../store/reducers/userSlice';

const Setting = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
      <AppButton title="logout" onPress={() => dispatch(logout())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Setting;
