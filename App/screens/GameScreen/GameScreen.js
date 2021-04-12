import React from 'react';
import {Component} from 'react';
import {colors} from '../../config';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {SafeAreaView, ScrollView, Platform, Image} from 'react-native';
import {Button} from '../../components';

class GameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
    };
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <Button
            title="Fer foto"
            onPress={() =>
              launchCamera(
                {
                  mediaType: 'photo',
                  includeBase64: false,
                  maxHeight: 200,
                  maxWidth: 200,
                },
                response => {
                  this.setState({response: this.state.response});
                },
              )
            }
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default GameScreen;
