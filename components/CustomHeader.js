import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f0f0f0', // Grijze achtergrond
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#333', // Witte tekstkleur
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CustomHeader;
