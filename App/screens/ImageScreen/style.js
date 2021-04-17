import {colors} from '../../config';
import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');
const imgWidth = width * 0.9;
const imgHeight = imgWidth;

export const styles = StyleSheet.create({
  container: {
    height: height - 85,
    width: '100%',
    backgroundColor: '#000',
  },
  imageContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
  },
  image: {
    width: imgWidth,
    height: imgHeight,
    zIndex: 999,
  },
  bgImage: {
    height: height,
    width: width,
  },
  originSelectorContainer: {
    width: width,
    height: 120,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  originSelectorContent: {
    width: '90%',
    height: '70%',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    zIndex: 999,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
  },
});

export default styles;
