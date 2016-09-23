import React, {Component, PropTypes} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Platform,
  Dimensions,
  Animated,
} from 'react-native';

import {SwipeView} from 'react-native-swipe-view';
import * as config from '../config';

const {height, width} = Dimensions.get('window');


export default class BinaryToolbar extends Component {
  constructor(props) {
    super(props)
  }

  static propTypes = {
    onClick: PropTypes.func
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.onClick(true)}><Image style={{width: 40, height: 50}} source={require('../../assets/dislike.png')} /></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.onClick(false)}><Image style={{width: 40, height: 50}} source={require('../../assets/like.png')} /></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    bottom: height/2-105,
    right: 0,
    // backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
  }
});
