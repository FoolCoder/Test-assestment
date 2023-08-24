import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Component/responsive';
import {colors} from '../../constant';
export default StyleSheet.create({
  img: {
    width: wp(100),
    height: hp(40),
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    resizeMode: 'center',
  },
  txt: {
    fontSize: wp(4),
    color: colors.primaryDark,
    fontWeight: '700',
    padding: 3,
    paddingLeft: 15,
  },
});
