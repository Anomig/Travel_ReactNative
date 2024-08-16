// screens/AboutScreen.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent'; 
import CustomHeader from '../components/CustomHeader'; 

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <CustomHeader title="About Me" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Hi, I'm Anomi</Text>
        <Text style={styles.intro}>
          I'm the passionate traveler behind this blog. Here's a bit about me...
        </Text>
        <Text style={styles.paragraph}>
          All my life I dreamed of traveling the world. Going beyond the horizon. 
          Join me on this adventure as I blog about my thoughts and bundle the best locations.
        </Text>
        <ButtonComponent
          title="Go Back to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flexGrow: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  intro: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default AboutScreen;
