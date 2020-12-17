/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import {ImageProps, StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  Icon,
  IconRegistry,
  Layout,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {AppNavigator} from './src/components/NavigationComponent';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useState} from 'react';
import {createContext} from 'react';

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
// const HeartIcon = (
//   props?: Partial<ImageProps>,
// ): React.ReactElement<ImageProps> => <Icon {...props} name="heart" />;

const initialState = {
  total: [],
  team1: [],
  team2: [],
};

export const RootContext = createContext(initialState);

export default (): React.ReactFragment => {
  const [data, setData] = useState(initialState);

  // const toggleStyle = (data) => {
  //   setData(newData);
  // };

  return (
    <RootContext.Provider value={{data, setData}}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* <Layout style={styles.container}>
          <Text style={styles.text} category="h1">
            Welcome to UI Kitten 😻
          </Text>
          <Text style={styles.text} category="s1">
            Start with editing App.js to configure your App
          </Text>
          <Text style={styles.text} appearance="hint">
            For example, try changing theme to Dark by using eva.dark
          </Text>
          <Button style={styles.likeButton} accessoryLeft={HeartIcon}>
            LIKE
          </Button>
        </Layout> */}
        <SafeAreaView style={{flex: 1}}>
          <AppNavigator />
        </SafeAreaView>
      </ApplicationProvider>
    </RootContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});
