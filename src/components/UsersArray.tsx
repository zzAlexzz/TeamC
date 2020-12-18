import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import uuid from 'react-native-uuid';

const UsersArray = ({users}) => (
  <Layout style={[styles.usersContainer, styles.heighAll]}>
    {users.map((user) => (
      <View key={uuid.v4()} style={styles.userContainer}>
        <Text style={styles.text}>{user}</Text>
      </View>
    ))}
  </Layout>
);

export default UsersArray;

const styles = StyleSheet.create({
  usersContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: 10,
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 5,
    backgroundColor: 'rgba(26, 115, 232, 0.5)',
  },
  text: {
    fontWeight: '800',
    color: '#fff',
  },
  heighAll: {height: '100%'},
});
