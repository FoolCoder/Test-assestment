import {StyleSheet} from 'react-native';
import {hp, wp} from '../component/responsive';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#2E2739',
    borderRadius: 27,
    height: hp(9),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },
  labelText: {
    fontSize: wp(3),
    marginTop: wp(1),
  },
  cartContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: wp(3),
    flex: 1,
  },
  tabContent: {
    alignItems: 'center',
    width: wp(18),
    margin: 0,
  },
  cartItems: {
    color: '#34283E',
    fontSize: 3,
  },
  cartPrice: {
    color: 'black',
    fontSize: 3,
  },
});
