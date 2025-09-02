import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { FlatCategory } from '../../components'
import styles from './style'

const CategoryScreen = ({ navigation }) => {
    const goBack = () => {
        navigation.pop()
    }
    const changeScreen = () => {
        navigation.push('ProductScreen', {})
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.list}>
                    <FlatCategory />
                    <FlatCategory />
                    <FlatCategory />
                    <FlatCategory />
                    <FlatCategory />
                    <FlatCategory />
                    <FlatCategory />
                </View>
            </View>
        </ScrollView>
    )
}

export default CategoryScreen