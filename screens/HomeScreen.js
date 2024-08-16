// screens/HomeScreen.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image,ScrollView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent'; 
import CustomHeader from '../components/CustomHeader'; 

const HomeScreen = ({ navigation }) => {
  const [latestBlogPost, setLatestBlogPost] = useState({
    title: 'Dummy Blog Title',
    content: 'This is a dummy blog post content to show in the home screen.',
  });

  return (
    <View style={styles.container}>
      <CustomHeader title="Home Screen" />
      <ScrollView contentContainerStyle={styles.content}>
      <Image
          source={require('../assets/header-image.jpg')} 
          style={styles.headerImage}
        />
        <View style={styles.buttonContainer}>
          <ButtonComponent
            title="Go to Blog Posts"
            onPress={() => navigation.navigate('BlogPosts')}
          />
          <ButtonComponent
            title="Go to About"
            onPress={() => navigation.navigate('About')}
          />
        </View>
        {latestBlogPost && (
          <View style={styles.blogPostContainer}>
            <Text style={styles.blogTitle}>{latestBlogPost.title}</Text>
            <Text style={styles.blogContent}>{latestBlogPost.content}</Text>
          </View>
        )}
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerImage: {
    width: '100%',
    height: 200, 
    resizeMode: 'cover', 
    marginBottom: 20, 
    borderRadius: 10, 
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonContainer: {
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  blogPostContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    width: '100%',
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  blogContent: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default HomeScreen;
