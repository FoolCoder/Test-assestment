import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React from 'react';
import {colors} from '../../constant';
import {useNavigation} from '@react-navigation/native';
import {
  arrow,
  map,
  minus,
  notava,
  plus,
  regular,
  selected,
  vip,
} from '../../constant/image';
import moment from 'moment';
import {styles} from './styles';
import Button from '../../component/button';
import {wp} from '../../component/responsive';

const data = [
  {img: selected, txt: 'Selected'},
  {img: notava, txt: 'Not Available'},
  {img: vip, txt: 'VIP'},
  {img: regular, txt: 'Regular'},
];
const SelectTicket = ({route: {params}}) => {
  const {name, date} = params;
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.bgc}}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.head}>
        <View style={styles.headrow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={arrow} style={styles.arrow} />
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 300,
            }}>
            <Text style={{fontSize: 16, color: '#202C43'}}>{name}</Text>
            <Text style={{fontSize: 12, color: '#61C3F2'}}>
              In theaters {moment(date).format('MMMM DD YYYY')}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={[styles.map]}>
        <Image source={map} style={{width: '90%', height: wp(62)}} />
      </TouchableOpacity>
      <View style={styles.zoom}>
        <Image source={plus} style={{width: 30, height: 30}} />
        <Image source={minus} style={{width: 30, height: 30}} />
      </View>
      <View style={styles.line} />
      <View style={styles.footer}>
        <View style={styles.seats}>
          {data.map((itm, idx) => (
            <View
              key={`seat ${idx}`}
              style={[
                styles.seatbox,
                {
                  marginHorizontal: idx === 3 ? 60 : 30,
                },
              ]}>
              <Image source={itm.img} style={styles.img} />
              <Text style={{color: '#8F8F8F', left: 8}}>{itm.txt}</Text>
            </View>
          ))}
        </View>
        <View style={styles.rows}>
          <Text style={{color: '#202C43', fontSize: 14}}>
            4/ <Text style={{fontSize: 10}}>3 row </Text>
            <Text>{'    '}x</Text>
          </Text>
        </View>
        <View style={styles.pay}>
          <View style={styles.price}>
            <Text style={{color: '#202C43', fontSize: 10}}>Total Price</Text>
            <Text style={{color: '#202C43', fontSize: 16, fontWeight: 700}}>
              $ 50{' '}
            </Text>
          </View>
          <Button bgc="#61C3F2" btntitle="Proceed to pay" width={200} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SelectTicket;
