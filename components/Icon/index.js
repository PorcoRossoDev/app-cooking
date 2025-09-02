import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style'
import { COLORS } from '../../contains'

const Icon = ({ icon, number }) => {  
  return (
    <View>
      <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name={icon} size={30} color={COLORS.icon} />
            <Text style={styles.number}>{number}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Icon
