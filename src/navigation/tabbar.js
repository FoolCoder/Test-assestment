import React from 'react';
import {TouchableOpacity, SafeAreaView, Text, Image} from 'react-native';
import {tabs} from './tabs';
import styles from './styles';
import {colors} from '../constant';

const BottomTab = ({state, navigation, descriptors, ...rest}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions?.tabBarStyle?.display === 'none') {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {tabs.map((tab, index) =>
        tab.isShow ? (
          <TouchableOpacity
            key={index}
            style={styles.mainContainer}
            onPress={() => {
              navigation.navigate(tab.route);
            }}>
            <Image source={tab.img} style={{width: 10, height: 10}} />

            <Text
              style={{
                ...styles.labelText,
                color: state.index == index ? '#fff' : '#827D88',
              }}>
              {tab.title}
            </Text>
          </TouchableOpacity>
        ) : null,
      )}
    </SafeAreaView>
  );
};

export default BottomTab;
