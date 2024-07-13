import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {wp} from '../responsive';
import {play} from '../../constant/image';

const Button = ({btntitle = '', bgc = '', onPress, width = null}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.btn,
        {backgroundColor: bgc || null, width: width || wp(68)},
      ]}>
      {bgc === '' && (
        <Image source={play} style={{width: 8, height: 12, right: 10}} />
      )}
      <Text style={styles.txt}>{btntitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  btn: {
    width: wp(68),
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#61C3F2',
    marginVertical: 8,
    flexDirection: 'row',
  },
  txt: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
