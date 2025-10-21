import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Khach = () => {
  return (
    <View style={styles.container}>
      <Text>Khach</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Khach;
