import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { Category } from '../../components'
import styles from './style'

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.list}>
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </View>
            </View>
        </ScrollView>
    )
}

export default HomeScreen