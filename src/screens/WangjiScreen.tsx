import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, Divider, Layout, TopNavigation} from '@ui-kitten/components';

const WangjiScreen = ({navigation: any}) => {
  const navigateDetails = () => {
    // navigation.navigate('Details');
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <TopNavigation title="蓝忘机" alignment="center" />
      <Divider />
      <Layout style={styles.center}>
        <Button onPress={navigateDetails}>OPEN 蓝忘机</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default WangjiScreen;

const styles = StyleSheet.create({
  safeAreaView: {flex: 1},
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
