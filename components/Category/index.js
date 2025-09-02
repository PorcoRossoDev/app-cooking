import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
import { COLORS } from '../../contains';
import Icon from '../Icon';

const FlatCategory = ({ title, thumb, favorite, view, onPress }) => {  
  const image = require('../../assets/product.jpg')

  return (
    <View style={styles.item}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.boxImage}>
            <Image source={thumb} style={styles.image} />
          </View>
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.action}>
          <Icon icon={'heart'} number={favorite} style={styles.icon} />
          <Icon icon={'eye'} number={view} style={styles.icon}/>
        </View>
    </View>
  )
}

export default FlatCategory
