import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
import { COLORS } from '../../contains'

const image = require('../../assets/product.jpg')
const FlatProduct = ({heart}) => {  
  return (
    <View style={styles.container}>
      <View style={styles.boxLeft}>
          <Image source={image} style={styles.image} />
          <Text style={styles.title}>Cillum tempor aute sint eli. tempor</Text>
      </View>
      <View style={styles.boxRight}>
        {
          heart == true ? 
          <TouchableOpacity>
            <Ionicons name="heart" style={{marginBottom: 10}} size={30} color={COLORS.icon} />
          </TouchableOpacity>
          :
          <></>
        }
          <TouchableOpacity>
            <Ionicons name="trash" size={30} color={COLORS.icon} />
          </TouchableOpacity>
      </View>
    </View>
  )
}

export default FlatProduct
