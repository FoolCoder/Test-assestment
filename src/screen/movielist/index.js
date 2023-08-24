import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Loader from '../../Component/loader';
import {apiRequest} from '../../hooks';
import {colors} from '../../constant';
import styles from './styles';
import {img} from '../../constant/image';
import {useNavigation} from '@react-navigation/native';

const MoviewList = () => {
  const navigatoin = useNavigation();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('api/movies');
      setMovies(response);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };
  const renderMovies = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigatoin.navigate('movieDetails', {id: item?.id})}
        style={styles.block}>
        <Image style={styles.img} source={img} />
        <View style={{padding: 8}}>
          <Text style={styles.txt}>{item?.movie}</Text>
          <Text style={styles.txt}>{item?.rating}/10</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return loading ? (
    <Loader />
  ) : (
    <View style={{flex: 1, backgroundColor: colors.bgc}}>
      <FlatList
        data={movies}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews
        windowSize={10}
        maxToRenderPerBatch={10}
        showsVerticalScrollIndicator={false}
        renderItem={renderMovies}
      />
    </View>
  );
};

export default MoviewList;
