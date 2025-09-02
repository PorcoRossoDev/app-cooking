import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'

const Category = ({ navigation }) => {  
  const image = require('../../assets/product.jpg')
  return (
    <View style={styles.item}>
        <TouchableOpacity>
          <Image source={image} style={styles.image} />
          <Text style={styles.text}>Cillum tempor aute sint eli. tempor</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Category
