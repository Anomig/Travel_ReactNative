// screens/BlogPostScreen.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ButtonComponent from '../components/ButtonComponent'; 

const BlogPostScreen = ({ navigation }) => {
  const blogPosts = [
    {
      id: 1,
      title: 'First Blog Post',
      content: 'This is the content of the first blog post. It provides insights into the topic covered in the post.',
    },
    {
      id: 2,
      title: 'Second Blog Post',
      content: 'This is the content of the second blog post. It offers a different perspective and more details on the subject matter.',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {blogPosts.map(post => (
          <View key={post.id} style={styles.blogPostContainer}>
            <Text style={styles.blogTitle}>{post.title}</Text>
            <Text style={styles.blogContent}>{post.content}</Text>
          </View>
        ))}
        <ButtonComponent
          title="Go to Home"
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
  blogPostContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
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

export default BlogPostScreen;
