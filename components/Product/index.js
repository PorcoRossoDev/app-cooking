import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
import { COLORS } from '../../contains'
import { useSelector, useDispatch } from 'react-redux'
import { removeFavorite, toggleFavorite } from '../../store/slices/favorite';
import { removeViewed } from '../../store/slices/viewed';
import { useNavigationState } from '@react-navigation/native';


const image = require('../../assets/product.jpg')
const FlatProduct = ({id, title, thumb, heart, type, navigation}) => {  
  const dispatch = useDispatch()

  const actRemove = () => {
    Alert.alert('Thông báo', 'Bạn có muốn xoá không?', [
      {
        text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        {
          text: 'OK', 
          onPress: () => {
            if(type == 'favorite'){ 
              dispatch(removeFavorite({id}))
            }
            if(type == 'seen'){
              dispatch(removeViewed({id}))
            }
          }
        },
    ]);
  }

  const actFavorite = () => {
    dispatch(toggleFavorite({id}))
  }

  const favoriteID = useSelector(state => state.favorite.items)
  const isFavorite = favoriteID.includes(id) ? true : false
  const iconheart = isFavorite ? 'heart' : 'heart-outline'
  const goProductScreen = () => {
    navigation.navigate('Home', {
      screen: 'ProductScreen',
      params: { productID: id, productTitle: title },
    });
  }
  return (
    <TouchableOpacity onPress={goProductScreen} style={styles.container}>
      <View style={styles.boxLeft}>
          <Image source={thumb} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.boxRight}>
        {
          heart == true ? 
          <TouchableOpacity onPress={actFavorite}>
            <Ionicons name={iconheart} style={{marginBottom: 10}} size={30} color={COLORS.icon} />
          </TouchableOpacity>
          :
          <></>
        }
          <TouchableOpacity onPress={actRemove}>
            <Ionicons name="trash" size={30} color={COLORS.icon} />
          </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default FlatProduct
