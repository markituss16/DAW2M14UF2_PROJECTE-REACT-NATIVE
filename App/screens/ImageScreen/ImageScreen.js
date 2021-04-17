import React, {Component, createRef} from 'react';
import {
  StatusBar,
  Dimensions,
  View,
  FlatList,
  Animated,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  AsyncStorage,
} from 'react-native';
import styles from './style';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const {width, height} = Dimensions.get('screen');

interface ImageSelectorState {
  data: any;
  scrollX: any;
  cameraResponse: any;
}

class ImageScreen extends Component<any, ImageSelectorState> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: this.getImages(),
      scrollX: new Animated.Value(0),
      cameraResponse: undefined,
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <View>
            {this.state.data.map((item: any, index: number) => {
              const inputRange = [
                index - 1 * width,
                index * width,
                (index + 1) * width,
              ];
              const opacity = this.state.scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0],
              });
              return (
                <Animated.Image
                  key={item.id}
                  source={item.src}
                  style={[
                    StyleSheet.absoluteFill,
                    {
                      opacity,
                      position: 'absolute',
                      height: height,
                    },
                  ]}
                  blurRadius={20}
                />
              );
            })}
          </View>
          <View style={styles.originSelectorContainer}>
            <View style={styles.originSelectorContent}>
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
                onPress={() => {
                  this.launchCamera();
                }}>
                <Text style={styles.buttonText}>Càmara</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.FlatList
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: this.state.scrollX}}}],
              {useNativeDriver: true},
            )}
            data={this.state.data}
            keyExtractor={(_: any, index: number) => index.toString()}
            horizontal={true}
            pagingEnabled={true}
            renderItem={(item: any) => {
              console.log(item);
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.imageContainer}
                  onPress={() => {
                    this.handleImagePress(item.item);
                  }}>
                  <Image
                    source={item.item.src}
                    style={styles.image}
                    resizeMode={'cover'}
                    borderRadius={16}
                  />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
    );
  }
  getImages() {
    return [{id: 1, src: require('../../assets/images/puzzle.jpg')}];
  }
  launchCamera() {
    launchCamera(
      {
        cameraType: 'back',
        maxHeight: 1200,
        maxWidth: 1200,
        mediaType: 'photo',
        quality: 1,
        saveToPhotos: true,
        includeBase64: true,
      },
      async response => {
        console.log(response.uri);
        this.setState({
          cameraResponse: response,
        });
        let data = [...this.state.data];
        let newId = data.length + 1;
        let newItem = {id: newId, src: {uri: response.uri}};
        data.push(newItem);
        this.setState({
          data: data,
        });
      },
    );
  }
  handleImagePress(item: any): void {
    this.props.navigation.navigate('Jugar', {
      item: item,
    });
  }
}

export default ImageScreen;
