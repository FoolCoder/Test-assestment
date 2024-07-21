import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Loader from '../../component/loader';
import {apiRequest} from '../../hooks';
import {colors} from '../../constant';
import styles from './styles';
import {img, search} from '../../constant/image';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {showBottomTabbar} from '../../helper';
import {hp, wp} from '../../component/responsive';

const MoviewList = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  useFocusEffect(
    React.useCallback(() => {
      showBottomTabbar(navigation);
    }, []),
  );
  useEffect(() => {
    getMovies();
  }, []);
  const getMovies = async () => {
    setLoading(true);
    try {
      const response = await apiRequest('movie/upcoming');
      setMovies(response?.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const renderMovies = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('movieDetails', {id: item?.id})}>
        <ImageBackground style={styles.block} source={img}>
          <Text style={styles.name}>{item?.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  return loading ? (
    <Loader />
  ) : (
    <View style={{flex: 1, backgroundColor: colors.bgc}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.head}>
        <View style={styles.headerrow}>
          <Text style={{fontSize: 16, color: '#202C43'}}>Watch</Text>
          <TouchableOpacity
            hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
            onPress={() => navigation.navigate('SearchMovies')}>
            <Image source={search} style={{width: wp(4.5), height: wp(4.5)}} />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{paddingTop: 20}}
        contentContainerStyle={{paddingBottom: 25}}
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
