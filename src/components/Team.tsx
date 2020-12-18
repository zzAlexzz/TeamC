import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Layout, TopNavigation} from '@ui-kitten/components';
import {RootContext} from '../../App';
import {ImageOverlay} from './ImageOverlayComponent';
import UsersArray from './UsersArray';

const Team = ({isYiBo}) => {
  const {data} = useContext(RootContext);
  const rscImage = isYiBo
    ? require('../../assets/lan.jpg')
    : require('../../assets/wei.jpg');
  const title = isYiBo ? '蓝忘机' : '魏无羡';
  const userData = isYiBo ? data.team2 : data.team1;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageOverlay style={styles.imageContainer} source={rscImage}>
        <ScrollView>
          <View style={styles.imageViewContainer}>
            <TopNavigation title={title} alignment="center" />
            <Divider />
            <View style={styles.gap} />
            <Layout style={styles.center}>
              <UsersArray users={userData} />
            </Layout>
          </View>
        </ScrollView>
      </ImageOverlay>
    </SafeAreaView>
  );
};

export default Team;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  imageContainer: {
    height: '100%',
    width: '100%',
  },
  imageViewContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  gap: {
    height: 200,
  },
});
