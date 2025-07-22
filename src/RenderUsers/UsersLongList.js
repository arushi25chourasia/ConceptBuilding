import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import useUsersList from './hooks/useUsersList';
import { USERS } from '../publicURLs/publicApis/users';

function UsersLongList() {
  const { users, loading } = useUsersList(USERS);

  console.log('@@@ users:', users, loading);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <Text>Users Long List</Text>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

export default UsersLongList;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
});
