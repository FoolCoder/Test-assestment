import {View, Text, Image, ScrollView, Linking} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {apiRequest} from '../../hooks';
import Loader from '../../component/loader';
import {colors} from '../../constant';
import {img} from '../../constant/image';
import styles from './styles';
import {wp} from '../../component/responsive';

const MoviewDetails = ({route: {params}}) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState();
  const {id} = params;
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await apiRequest(`api/movies/${id}`);
      setMovie(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(movie?.imdb_url);
    if (supported) {
      await Linking.openURL(movie?.imdb_url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${movie?.imdb_url}`);
    }
  }, [movie?.imdb_url]);
  return loading ? (
    <Loader />
  ) : (
    <ScrollView style={{flex: 1, backgroundColor: colors.bgc}}>
      <Image style={styles.img} source={img} />
      <View style={{height: 15}} />
      <Text style={{...styles.txt, fontSize: wp(5)}}>{movie?.movie}</Text>
      <Text style={styles.txt}>Rating: {movie?.rating}/10</Text>
      <Text style={styles.txt}>
        Url:{'   '}
        <Text
          onPress={handlePress}
          style={[
            styles.txt,
            {color: colors.primary, textDecorationLine: 'underline'},
          ]}>
          {movie?.imdb_url}
        </Text>
      </Text>
      <Text style={[styles.txt, {fontSize: wp(5)}]}>Description</Text>
      <Text style={styles.txt}>
        Over the course of several years, two convicts form a friendship,
        seeking consolation and, eventually, redemption through basic
        compassion.
      </Text>
    </ScrollView>
  );
};

export default MoviewDetails;
