import {StyleSheet} from 'react-native';
import {hp, wp} from '../../component/responsive';
export const styles = StyleSheet.create({
  head: {
    width: '100%',
    height: hp(16),
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  headrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  arrow: {width: 7.5, height: 15, right: 10, bottom: 8},
  date: {
    marginTop: 80,
    padding: 15,
  },
  box: {
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 15,
    width: wp(19),
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: wp(69),
    height: wp(40),
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
});
