import {StyleSheet} from 'react-native';
import {hp, wp} from '../../component/responsive';
import {colors} from '../../constant';
export default StyleSheet.create({
  head: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    top: 75,
    left: 25,
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: hp(58),
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  txt: {
    fontSize: wp(4),
    color: '#8F8F8F',
    padding: 3,
    paddingLeft: 15,
  },
  genre: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 'auto',
    maxWidth: '90%',
    minWidth: '60%',
    marginHorizontal: 24,
  },
  generbox: {
    width: 'auto',
    minWidth: 70,
    maxWidth: 75,
    height: 28,
    borderRadius: 14,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 6,
    paddingBottom: 6,
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 4,
  },
});
