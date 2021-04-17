import React from 'react';
import {Alert, StatusBar, Text, View, BackHandler} from 'react-native';
import {Component} from 'react';
import {colors} from '../../config';
import styles from './style';
import {Button} from '../../components';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.backgroundScreens} />
        <Text style={styles.mainTitle}>Joc de puzzles</Text>
        <View style={styles.divider} />

        <View style={styles.buttons}>
          <Button
            title={'JUGAR'}
            onPress={() => this.props.navigation.navigate('ImageSelector')}
          />
          <Button
            title={'PUNTUACIONS'}
            onPress={() => this.props.navigation.navigate('Puntuacions')}
          />
          <Button
            title={'AJUDA'}
            onPress={() => this.props.navigation.navigate('Ajuda')}
          />
          <Button title={'SORTIR'} onPress={() => BackHandler.exitApp()} />
        </View>
        <View style={styles.versionContainer}>
          <Text style={styles.version}>Marc Palma 2021</Text>
        </View>
      </View>
    );
  }
}
export default HomeScreen;
