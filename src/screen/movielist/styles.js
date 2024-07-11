import {StyleSheet} from 'react-native';
import {hp, wp} from '../../component/responsive';
import {colors} from '../../constant';
export default StyleSheet.create({
  block: {
    width: wp(95),
    padding: 8,
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 8,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: wp(25),
    height: hp(15),
    borderRadius: 12,
  },
  txt: {
    fontSize: wp(4),
    fontWeight: '700',
    color: colors.primaryDark,
    width: wp(65),
  },
});
