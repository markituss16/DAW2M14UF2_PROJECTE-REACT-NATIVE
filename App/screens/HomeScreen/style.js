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
  buttons: {
    flexDirection: 'column',
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
};

export default styles;
