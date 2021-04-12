import React from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import {Component} from 'react';
import {DataTable} from 'react-native-paper';

var db = openDatabase({name: 'PlayersScore.db'});
const baseDades = () => {
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
      tx.executeSql('INSERT INTO score (playerName,score) values (Sara,1)', []);
    });
};

class ScoreScreen extends Component {
  render() {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title numeric>Nom</DataTable.Title>
          <DataTable.Title numeric>Puntuació</DataTable.Title>
        </DataTable.Header>
      </DataTable>
    );
  }
}

export default ScoreScreen;
