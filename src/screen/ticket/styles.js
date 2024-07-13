import {StyleSheet} from 'react-native';
import {wp} from '../../component/responsive';
export const styles = StyleSheet.create({
  head: {
    width: '100%',
    height: 123,
    backgroundColor: '#fff',
  },
  headrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  arrow: {width: 15, height: 15, right: 50},
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
    width: 67,
    marginHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: wp(65),
    height: wp(40),
    borderWidth: 0.5,
    borderRadius: 10,
    marginHorizontal: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
});
