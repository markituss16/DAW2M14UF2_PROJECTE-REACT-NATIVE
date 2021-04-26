import React, {Component} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import {
  Alert,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
} from 'react-native';
import styles from './styles';
import SplashScreen from 'react-native-smart-splash-screen';
import {Button, Display} from '../../components';
import SlidePuzzle from '../../containers/SlidePuzzle';
import {images, colors} from '../../config';

var db = openDatabase({name: 'JugadorsDB.db'});

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: '',
      movements: 0,
      showNumbers: false,
      showModal: false,
      keepCounting: true,
      nom: '',
      puntuacio: 0,
    };
  }
  handleNom = text => {
    this.setState({nom: text});
  };

  handlePuntuacio = text => {
    this.setState({puntuacio: text});
  };

  componentDidMount() {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Puntuacions_taula'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Puntuacions_taula', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Puntuacions_taula(nom VARCHAR(30), puntuacio INT(3))',
              [],
            );
          }
        },
      );
    });
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }

  insertData = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO Puntuacions_taula (nom, puntuacio) VALUES (?,?)',
        [this.state.nom, this.state.puntuacio],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert('Data Inserted Successfully....');
          } else {
            Alert.alert('Failed....');
          }
        },
      );
    });
    this.anarRanking();
  };

  anarRanking = () => {
    this.props.navigation.navigate('Puntuacions');
  };

  onMove = movements => {
    this.setState({
      movements,
    });
  };

  onLoad = () => {
    this.setState({
      movements: 0,
      headerText: '',
      keepCounting: true,
    });
  };

  onFinish = () => {
    this.setState({
      keepCounting: false,
      showModal: true,
    });
  };

  render() {
    const {showNumbers, movements, headerText, showModal} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <Display
            containerStyle={styles.firstButton}
            label={'Moviments'}
            value={movements}
          />
        </View>
        <Text style={styles.headerText}>{headerText}</Text>
        <View style={styles.puzzleContainer}>
          <SlidePuzzle
            ref={slidePuzzle => {
              this.slidePuzzle = slidePuzzle;
            }}
            columns={3}
            showNumbers={showNumbers}
            onFinish={this.onFinish}
            onLoad={this.onLoad}
            onMove={moves => this.onMove(moves)}
          />
        </View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={this.handleNom}
          placeholder="Entra el teu nom"
        />
        <TextInput
          style={styles.textInputStyle}
          onChangeText={this.handlePuntuacio}
          placeholder="Entra la puntuacio"
        />
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={this.insertData}>
          <Text style={styles.touchableOpacityText}> Anar a ranking </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default GameScreen;
