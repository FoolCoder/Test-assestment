import {StyleSheet} from 'react-native';
import {hp, wp} from '../../component/responsive';
import {colors} from '../../constant';
export default StyleSheet.create({
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
    width: wp(95),
    height: 180,
    padding: 8,
    alignSelf: 'center',
    backgroundColor: '#fff',
    elevation: 1,
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
    paddingBottom: 20,
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
