/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Video from 'react-native-video';
import VideoFile01 from './videos/MoistureSurge_Animation_R4.mp4';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={VideoFile01}
          style={styles.videoContainer}
          repeat={true}
          paused={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    alignSelf: 'stretch'
  },
});
