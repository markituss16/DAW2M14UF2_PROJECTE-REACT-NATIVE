import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Display = props => (
  <View style={[styles.container, props.containerStyle || null]}>
    <Text style={styles.label}>{props.label}</Text>
    <Text style={styles.value}>{props.value}</Text>
  </View>
);

export default Display;
