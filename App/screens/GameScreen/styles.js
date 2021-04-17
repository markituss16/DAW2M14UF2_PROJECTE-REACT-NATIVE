import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  boardContainer: {
    height: screenHeight - 85,
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    width: screenWidth,
    height: screenWidth,
    borderColor: '#fff',
    borderWidth: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
