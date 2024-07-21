import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {apiRequest} from '../../hooks';
import Loader from '../../component/loader';
import {colors} from '../../constant';
import {img, left, mask} from '../../constant/image';
import styles from './styles';
import {wp} from '../../component/responsive';
import moment from 'moment';
import Button from '../../component/button';
import {hideBottomTabbar} from '../../helper';
import {useNavigation} from '@react-navigation/native';

const bgc = ['#15D2BC', '#E26CA5', '#564CA3', '#CD9D0F'];
const MoviewDetails = ({route: {params}}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState();
  const {id} = params;
  useEffect(() => {
    hideBottomTabbar(navigation);
    getMovies();
  }, []);
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await apiRequest(`movie/${id}`);
      setMovie(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <ScrollView style={{flex: 1, backgroundColor: colors.bgc}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground style={styles.img} source={mask}>
        <View style={styles.head}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={left} style={{width: 7.5, height: 15}} />
          </TouchableOpacity>
          <Text
            style={{color: '#fff', left: 30, fontWeight: '600', fontSize: 14}}>
            Watch
          </Text>
        </View>
        <Text style={{color: '#fff', fontSize: 16}}>
          In Theater {moment(movie?.release_date).format('MMMM DD YYYY')}
        </Text>
        <Button
          btntitle="Get Ticket"
          bgc="#61C3F2"
          onPress={() =>
            navigation.navigate('Ticket', {
              name: movie?.title,
              date: movie?.release_date,
            })
          }
        />
        <Button btntitle="Watch Trailer" />
        <View style={{height: 10}} />
      </ImageBackground>
      <View style={{height: 15}} />
      <Text
        style={[
          styles.txt,
          {fontSize: wp(5), color: '#202C43', left: 15, marginVertical: 5},
        ]}>
        Genre
      </Text>
      <View style={styles.genre}>
        {movie?.genres?.map((item, index) => {
          if (index < 4)
            return (
              <View
                key={`genre ${index}`}
                style={[styles.generbox, {backgroundColor: bgc[index]}]}>
                <Text style={{fontSize: 12, color: '#fff'}}>{item?.name}</Text>
              </View>
            );
        })}
      </View>
      <View style={{padding: 15}}>
        <Text style={[styles.txt, {fontSize: wp(5), color: '#202C43'}]}>
          Overview
        </Text>
        <Text style={styles.txt}>{movie?.overview}</Text>
      </View>
    </ScrollView>
  );
};

export default MoviewDetails;
