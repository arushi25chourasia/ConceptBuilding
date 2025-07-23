import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import useFetchPosts from '../hooks/useFetchPosts';
// import users from '../../../mockApiResponse/users.json';

function DisplayPosts() {
  const { page, data, loadingMore, hasMoreData, getPosts } = useFetchPosts();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')
      .then(res => res.json())
      .then(data => console.log('@@@ DATA:', data))
      .catch(error => console.log('@@@ FETCH ERROR:', error.message));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  const renderFooter = () =>
    loadingMore ? (
      <View style={styles.footer}>
        <ActivityIndicator size="small" />
      </View>
    ) : null;

  return (
    <View>
      <Text>DisplayPosts</Text>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        onEndReached={() => getPosts(page)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
      {
        !hasMoreData && <Text>No More Data to Load</Text>
      }
    </View>
  );
}

export default DisplayPosts;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
});
