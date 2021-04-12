import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';

const Button = props => {
  const {onPress} = props;
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight onPress={onPress}>
        <View style={[styles.buttonText, props.containerStyle || null]}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Button;
