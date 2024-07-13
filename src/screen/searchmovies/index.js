import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  FlatList,
  ImageBackground,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {apiRequest} from '../../hooks';
import {colors} from '../../constant';
import {styles} from './styles';
import {dots, img, search} from '../../constant/image';
import {hp} from '../../component/responsive';
import {useNavigation} from '@react-navigation/native';
import {data} from './data';
import Loader from '../../component/loader';
import {hideBottomTabbar} from '../../helper';

const SearchMovies = () => {
  const timeout = useRef(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState(false);
  const [query, setQuery] = useState('');
  const [searhedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    hideBottomTabbar(navigation);
  }, []);
  const searchingMovies = async value => {
    setLoading(true);
    try {
      const response = await apiRequest(
        `search/movie?query=${value}`,
        'search',
      );
      if (response?.results.length === 0) {
        setFlag(false);
        setSearchedMovies([]);
        Alert.alert(
          'Search result no found. Please change your search criteria',
        );
        return;
      }
      setFlag(true);
      setSearchedMovies(response?.results);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  const onChangeHandler = value => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      searchingMovies(value);
    }, 2000);
  };
  const renderMovies = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.block}
        onPress={() => navigation.navigate('movieDetails', {id: item?.id})}>
        <Image style={styles.img} source={img} />
        <Text
          numberOfLines={2}
          style={[styles.name, {paddingLeft: 5, paddingBottom: 0}]}>
          {item?.title}
        </Text>
        <Image source={dots} style={{width: 22, height: 4}} />
      </TouchableOpacity>
    );
  };
  const renderCategory = ({item, index}) => {
    return (
      <ImageBackground style={styles.categoryimg} source={item.img}>
        <Text style={styles.categorytitle}>{item?.title}</Text>
      </ImageBackground>
    );
  };
  const headerComponet = () => (
    <>
      {flag && (
        <>
          <Text style={[styles.name, {marginTop: 15, paddingBottom: 8}]}>
            {searhedMovies.length} result found
          </Text>
          <View style={styles.line} />
        </>
      )}
    </>
  );
  return (
    <View style={{flex: 1, backgroundColor: colors.bgc}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={{backgroundColor: '#fff', height: hp(15)}}>
        <View style={styles.input}>
          <Image source={search} style={{width: 15, height: 15}} />
          <TextInput
            defaultValue={query}
            style={styles.txtInput}
            placeholder="Search Movies"
            placeholderTextColor={'grey'}
            autoFocus
            onChangeText={txt => {
              if (txt?.length == 0) {
                setFlag(false);
                return;
              }
              onChangeHandler(txt);
            }}
          />
          <TouchableOpacity onPress={() => setQuery('')}>
            <Text style={{color: '#202C43', fontSize: 15}}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && <Loader />}
      <FlatList
        key={flag ? '#' : '-'}
        data={flag ? searhedMovies : data}
        numColumns={flag ? 1 : 2}
        keyboardShouldPersistTaps="handled"
        columnWrapperStyle={
          !flag && {
            justifyContent: 'space-between',
            alignItems: 'center',
          }
        }
        style={{width: '92%', alignSelf: 'center'}}
        keyExtractor={(item, index) => index.toString()}
        removeClippedSubviews
        windowSize={10}
        maxToRenderPerBatch={10}
        showsVerticalScrollIndicator={false}
        renderItem={flag ? renderMovies : renderCategory}
        ListHeaderComponent={headerComponet}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>Search result not found!</Text>
        )}
      />
    </View>
  );
};

export default SearchMovies;
