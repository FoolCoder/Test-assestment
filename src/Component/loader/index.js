import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {hp, wp} from '../responsive';

function Loader() {
  return (
    <View
      style={{
        backfaceVisibility: 'visible',
        alignSelf: 'center',
        width: wp(100),
        height: hp(100),
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.3)',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator styles={{}} size={'large'} color={colors.primary} />
    </View>
  );
}

export default Loader;
