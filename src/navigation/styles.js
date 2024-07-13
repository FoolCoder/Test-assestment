import {StyleSheet} from 'react-native';
import {wp} from '../component/responsive';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: wp(1),
    backgroundColor: '#2E2739',
    borderRadius: 15,
    height: 50,
  },
  mainContainer: {
    alignItems: 'center',
    paddingTop: wp(3),
    paddingBottom: wp(1),
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
