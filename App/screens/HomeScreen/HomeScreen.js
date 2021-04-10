import React from 'react';
import {Alert, Button, StatusBar, Text, View} from 'react-native';
import {Component} from 'react';
import {colors} from '../../config';
import styles from './style';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.backgroundScreens}
          barStyle={'light-content'}
        />
        <Text style={styles.main}>Joc de puzzles</Text>
        <View style={styles.divider} />

        <View style={styles.buttons}>
          <Button
            containerStyle={styles.firstButton}
            title={'JUGAR'}
            onPress={() => Alert.alert('Simple Button pressed')}
          />
          <Button
            title={'PUNTUACIONS'}
            onPress={() => Alert.alert('Button with adjusted color pressed')}
          />
        </View>
        <View style={styles.versionContainer}>
          <Text style={styles.version}>Marc Palma 2021</Text>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
