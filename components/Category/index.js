import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
import { COLORS } from '../../contains';
import Icon from '../Icon';

const FlatCategory = ({ navigation }) => {  
  const image = require('../../assets/product.jpg')
  return (
    <View style={styles.item}>
        <TouchableOpacity>
          <View style={styles.boxImage}>
            <Image source={image} style={styles.image} />
          </View>
          <Text style={styles.text}>Cillum tempor aute sint eli. tempor</Text>
        </TouchableOpacity>
        <View style={styles.action}>
          <Icon icon={'heart-outline'} number={123} style={styles.icon} />
          <Icon icon={'eye-outline'} number={123} style={styles.icon}/>
        </View>
    </View>
  )
}

export default FlatCategory
