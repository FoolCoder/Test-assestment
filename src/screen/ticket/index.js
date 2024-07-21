import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../constant';
import {styles} from './styles';
import {arrow, map} from '../../constant/image';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import Button from '../../component/button';
import {wp} from '../../component/responsive';
const data = [
  {time: '12:30', price1: '50$', price2: '2500$'},
  {time: '13:30', price1: '75$', price2: '3000$'},
  {time: '14:30', price1: '100$', price2: '3500$'},
  {time: '15:30', price1: '125$', price2: '4000$'},
  {time: '16:30', price1: '150$', price2: '4500$'},
];
const Ticket = ({route: {params}}) => {
  const {name, date} = params;
  const navigation = useNavigation();
  const [selectDate, setSelectDate] = useState(0);
  return (
    <View style={{flex: 1, backgroundColor: colors.bgc}}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.head}>
        <View style={styles.headrow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
            <Image source={arrow} style={styles.arrow} />
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: 300,
            }}>
            <Text
              numberOfLines={2}
              style={{fontSize: 16, color: '#202C43', textAlign: 'center'}}>
              {name}
            </Text>
            <Text style={{fontSize: 12, color: '#61C3F2'}}>
              In theaters {moment(date).format('MMMM DD YYYY')}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.date}>
        <Text style={{color: '#202C43', fontSize: 16}}>Date</Text>
        <ScrollView
          contentContainerStyle={{flexDirection: 'row', marginTop: 10}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {['22', '23', '24', '25', '26'].map((itm, idx) => (
            <TouchableOpacity
              key={`date ${idx}`}
              onPress={() => setSelectDate(idx)}
              style={[
                styles.box,
                {backgroundColor: selectDate === idx ? '#61C3F2' : '#A6A6A61A'},
              ]}>
              <Text style={{color: selectDate === idx ? '#fff' : '#202C43'}}>
                {itm} Jul
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView
          contentContainerStyle={{flexDirection: 'row', marginTop: 40}}
          style={{marginTop: 20}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {data.map((itm, idx) => (
            <View key={`ticket ${idx}`}>
              <Text style={{color: '#202C43', fontSize: 12}}>
                {itm.time}{' '}
                <Text style={{color: '#8F8F8F'}}> Cinetech + hall 1</Text>
              </Text>
              <TouchableOpacity
                onPress={() => setSelectDate(idx)}
                style={[
                  styles.map,
                  {borderColor: selectDate === idx ? '#61C3F2' : '#202C43'},
                ]}>
                <Image source={map} style={{width: 144, height: 113}} />
              </TouchableOpacity>
              <Text style={{color: '#8F8F8F', fontSize: 10, padding: 8}}>
                From{' '}
                <Text style={{color: '#202C43', fontWeight: '700'}}>
                  {itm.price1}{' '}
                </Text>
                <Text>or </Text>
                <Text style={{color: '#202C43', fontWeight: '700'}}>
                  {itm.price2}
                </Text>
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={{alignSelf: 'center', position: 'absolute', bottom: 20}}>
        <Button
          onPress={() => navigation.navigate('SelectTicket', {name, data})}
          bgc="#61C3F2"
          btntitle="Select Seats"
          width={wp(85)}
        />
      </View>
    </View>
  );
};

export default Ticket;
