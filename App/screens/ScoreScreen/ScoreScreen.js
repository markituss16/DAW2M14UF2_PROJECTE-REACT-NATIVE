import React from 'react';
import SQLite from 'react-native-sqlite-storage';
import {Component} from 'react';
import {DataTable} from 'react-native-paper';
import {Text, View} from 'react-native';

let db;

class ScoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scoreList: [],
    };
    db = SQLite.openDatabase(
      {name: 'PlayersScore.db'},
      this.success.bind(this),
      this.fail,
    );
  }
  success = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        'CREATE TABLE IF NOT EXISTS score(id integer primary key not null, playerName text, score int',
      );
    }),
      db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO score (playerName,score) values (Marc,777)',
          [],
        );
        tx.executeSql('select * from score', [], (tx, results) => {
          let data = results.rows.length;
          let scores = [];
          for (let i = 0; i < data; i++) {
            scores.push(results.rows.item(i));
          }
          this.setState({scoreList: scores});
        });
      });
  };

  fail = error => {
    console.error(error);
  };

  render() {
    return this.state.scoreList.map(function (item, i) {
      return (
        <View key={i}>
          <Text>{item.playerName}</Text>
          <Text>{item.score}</Text>
        </View>
      );
    });
  }
}

export default ScoreScreen;
