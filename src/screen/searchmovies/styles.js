import {StyleSheet} from 'react-native';
import {hp, wp} from '../../component/responsive';
import {colors} from '../../constant';
export const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderRadius: 30,
    height: 50,
    justifyContent: 'space-between',
    backgroundColor: '#EFEFEF',
    alignSelf: 'center',
    marginTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  txtInput: {
    width: wp(72),
    height: 'auto',
    fontSize: wp(3.2),
    color: '#000',
  },
  block: {
    width: wp(92),
    height: 100,
    alignSelf: 'center',
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    color: '#202C43',
    fontSize: wp(3.5),
    paddingLeft: 10,
    paddingBottom: 20,
    width: wp(45),
  },
  img: {width: 130, height: 100, borderRadius: 10},
  empty: {
    alignSelf: 'center',
    marginTop: 50,
    color: '#202C43',
    fontSize: wp(4),
  },
  line: {
    backgroundColor: '#0000001C',
    width: '90%',
    alignSelf: 'center',
    height: 1,
  },
  categoryimg: {
    width: 162,
    height: 120,
    marginVertical: 4,
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 20,
    overflow: 'hidden',
    borderRadius: 10,
  },
  categorytitle: {
    color: '#fff',
    fontSize: 16,
  },
});
