import {StyleSheet} from 'react-native';
import {hp, wp} from '../../component/responsive';
import {colors} from '../../constant';
export default StyleSheet.create({
  head: {
    backgroundColor: '#fff',
    height: hp(15),
    justifyContent: 'flex-end',
  },
  headerrow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
    alignSelf: 'center',
    height: 'auto',
    marginTop: 30,
    padding: 15,
  },
  block: {
    width: wp(92.5),
    height: hp(24),
    padding: 8,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'flex-end',
    overflow: 'hidden',
  },
  name: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 15,
    paddingBottom: 18,
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
