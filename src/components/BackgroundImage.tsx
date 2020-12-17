import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    // backgroundColor: '#387bbd',
  },
});

const BackgroundImage = (props: any): JSX.Element => {
  const {children} = props;

  return (
    <ImageBackground
      source={require('../../assets/main.jpg')}
      style={styles.backgroundImage}>
      {children}
    </ImageBackground>
  );
};

export default BackgroundImage;
