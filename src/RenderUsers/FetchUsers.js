import React from 'react';
import {  ScrollView } from 'react-native';
import ShortUserList from './UsersList';
import LongUserList from './UsersLongList';

function FetchUsers() {
  return (
    <ScrollView>
      <ShortUserList />
      <LongUserList />
    </ScrollView>
  );
}

export default FetchUsers;
