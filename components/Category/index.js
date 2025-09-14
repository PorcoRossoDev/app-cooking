import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
import { COLORS } from '../../contains';
import Icon from '../Icon'
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/slices/favorite';


const FlatCategory = ({id, title, thumb, favorite, view, onPress }) => {
  const dispatch = useDispatch()
  const favoriteData = useSelector(state => state.favorite.items)
  const isFavorite = favoriteData.includes(id)
  const activeFavorite = isFavorite ? 'heart' : 'heart-outline'
  const activeNumberFavorite = isFavorite ? favorite + 1 : favorite

  const changeFavorite = () => {
    dispatch(toggleFavorite({id}))
  }
  
  return (
    <View style={styles.item}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.boxImage}>
            <Image source={thumb} style={styles.image} />
          </View>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.action}>
          <TouchableOpacity onPress={changeFavorite}>
            <Icon icon={activeFavorite} number={activeNumberFavorite} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Chức năng đan g phát triển')}>
            <Icon icon={'eye'} number={view} style={styles.icon}/>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default FlatCategory
