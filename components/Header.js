import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text>This is a sample text</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
});
