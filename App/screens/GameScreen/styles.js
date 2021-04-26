import {colors} from '../../config';

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.backgroundScreens,
    padding: 12,
  },
  mainTitle: {
    color: colors.primary,
    fontSize: 24,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: colors.primary,
    marginVertical: 12,
  },
  headerText: {
    color: colors.primary,
  },
  displayContainer: {
    flexDirection: 'row',
  },
  puzzleContainer: {
    width: '100%',
    backgroundColor: colors.backgroundCanvas,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstButton: {
    marginRight: 10,
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  versionContainer: {
    position: 'absolute',
    bottom: 12,
    right: 12,
  },
  version: {
    color: colors.primary,
    fontSize: 12,
  },
  touchableOpacity: {
    backgroundColor: '#0091EA',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    width: '100%',
  },
  touchableOpacityText: {
    color: '#FFFFFF',
    fontSize: 23,
    textAlign: 'center',
    padding: 8,
  },
  textInputStyle: {
    height: 45,
    width: '90%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#00B8D4',
    borderRadius: 7,
    backgroundColor: '#FFFFFFFF',
    marginTop: 15,
  },
};

export default styles;
