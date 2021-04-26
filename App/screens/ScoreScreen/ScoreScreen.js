import React, {Component} from 'react';
import {openDatabase} from 'react-native-sqlite-storage';
import {FlatList} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Text, View} from 'react-native';

var db = openDatabase({name: 'db.Jugadors'});

class ScoreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsLlista: null,
    };
  }

  componentDidMount() {
    db.transaction(function (tx) {
      tx.executeSql('SELECT nom,puntuacio FROM puntuacions;', [], (_, res) => {
        var temp = [];
        console.log(res);
        for (let i = 0; i < res.rows.length; ++i) {
          temp.push(res.rows.item(i));
        }
        this.setState({itemsLlista: temp});
      });
    });
  }

  render() {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nom</DataTable.Title>
          <DataTable.Title numeric>Puntuació</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>AAA</DataTable.Cell>
          <DataTable.Cell numeric>100</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>Andreu</DataTable.Cell>
          <DataTable.Cell numeric>50</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    );
  }
}

export default ScoreScreen;
