import React from 'react';
import {Component} from 'react';
import {Card, Paragraph, Title} from 'react-native-paper';
import {images, colors} from '../../config';

class HelpScreen extends Component {
  render() {
    return (
      <Card>
        <Card.Cover source={images.puzzleImage} />
        <Card.Content>
          <Title>Puzzles</Title>
          <Paragraph>
            Desenvolupament d'una aplicació per a resoldre puzles amb el mòbil i
            desant les dades en el mòbil, concretant-ne les formes de
            finançament, realitzant les accions de promoció més òptimes,
            planificant l’arquitectura de l'aplicació, avaluant les dades a
            emmagatzemar i assegurant el seu emmagatzematge i transmissió i
            explotant les característiques tecnològiques dels dispositius
            mòbils.
          </Paragraph>
        </Card.Content>
      </Card>
    );
  }
}

export default HelpScreen;
