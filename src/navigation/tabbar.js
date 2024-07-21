import React from 'react';
import {TouchableOpacity, SafeAreaView, Text, Image} from 'react-native';
import {tabs} from './tabs';
import styles from './styles';
import {colors} from '../constant';

const dim = [
  {width: 16, height: 16},
  {width: 18, height: 18},
  {width: 18, height: 18},
  {width: 22, height: 22},
];
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
            <Image
              source={tab.img}
              style={{width: dim[index].width, height: dim[index].height}}
            />

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
