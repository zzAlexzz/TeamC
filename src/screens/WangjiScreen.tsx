import React, {useContext} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Divider, Layout, TopNavigation} from '@ui-kitten/components';
import {RootContext} from '../../App';
import {ImageOverlay} from '../components/ImageOverlayComponent';
import UsersArray from '../components/UsersArray';

const WangjiScreen = () => {
  const {data} = useContext(RootContext);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageOverlay
        style={styles.imageContainer}
        source={require('../../assets/lan.jpg')}>
        <ScrollView>
          <View style={styles.imageViewContainer}>
            <TopNavigation title="蓝忘机" alignment="center" />
            <Divider />
            <View style={styles.gap} />
            <Layout style={styles.center}>
              <UsersArray users={data.team2} />
            </Layout>
          </View>
        </ScrollView>
      </ImageOverlay>
    </SafeAreaView>
  );
};

export default WangjiScreen;

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
