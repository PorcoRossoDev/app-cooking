import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'

const Category = ({ title, thumb, onPress }) => {  
  const image = require('../../assets/product.jpg')
  return (
    <View style={styles.item}>
        <TouchableOpacity onPress={onPress}>
          <Image source={thumb} style={styles.image} />
          <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Category
