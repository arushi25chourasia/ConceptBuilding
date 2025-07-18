import React from 'react';
import {
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import useUsersList from './hooks/useUsersList';

function RenderUsers() {
  const { users, loading } = useUsersList();

  if (loading) return <ActivityIndicator />;
  if (users.length === 0)
    return (
      <>
        <Text>Error while loading users</Text>
      </>
    );

  const RenderDetails = ({ keyType, value }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>{`${keyType}:`}</Text>
        <Text>{value}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <Text>Users Fetched</Text>
      {users.map(item => {
        return (
          <View style={styles.nameStyleContainer} key={item.id}>
            <RenderDetails keyType="name" value={item.name} />
            <RenderDetails keyType="username" value={item.username} />
            <RenderDetails keyType="email" value={item.email} />
          </View>
        );
      })}
    </ScrollView>
  );
}

export default RenderUsers;

const styles = StyleSheet.create({
  nameStyleContainer: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    padding: 10,
  },
});
