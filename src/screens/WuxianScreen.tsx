import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Layout, TopNavigation} from '@ui-kitten/components';
import {RootContext} from '../../App';
import {ImageOverlay} from '../components/ImageOverlayComponent';
import UsersArray from '../components/UsersArray';

const WuxianScreen = ({navigation: any}) => {
  const {data} = useContext(RootContext);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageOverlay
        style={styles.imageContainer}
        source={require('../../assets/wei.jpg')}>
        <ScrollView>
          <View style={styles.imageViewContainer}>
            <TopNavigation title="魏无羡" alignment="center" />
            <Divider />
            <View style={styles.gap} />
            <Layout style={styles.center}>
              <UsersArray users={data.team1} />
            </Layout>
          </View>
        </ScrollView>
      </ImageOverlay>
    </SafeAreaView>
  );
};

export default WuxianScreen;

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
