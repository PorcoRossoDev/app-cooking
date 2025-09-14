import React from 'react'
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
import { COLORS } from '../../contains'
import { useDispatch, useSelector } from 'react-redux';
import {removeAllViewed } from '../../store/slices/viewed'
import {removeAllFavorite } from '../../store/slices/favorite'

const IconHeader = ({type, data}) => {  
  const dispatch = useDispatch()
  console.log(data)
  
  const removeAll = () => {
    Alert.alert('Thông báo', 'Bạn có muốn xoá tất cả không?', [
      {
        text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
        {
          text: 'OK', 
          onPress: () => {
            if(type == 'favorite'){ 
              dispatch(removeAllFavorite())
            }
            if(type == 'seen'){
              dispatch(removeAllViewed())
            }
          }
        },
    ]);
  }
  return (
      data.length > 0
      ?
      <TouchableOpacity onPress={removeAll} style={styles.container}>
          <Ionicons name={'trash'} size={30} color={COLORS.second} />
      </TouchableOpacity>
      : <></>
  )
}

export default IconHeader
