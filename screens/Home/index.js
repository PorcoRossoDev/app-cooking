import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Category } from '../../components'
import styles from './style'
import { CATEGORIES } from '../../data'

const HomeScreen = ({ navigation }) => {

    const renderGirdHomeItem = ({ item }) => {
        return (
            <Category
                title={item.title}
                thumb={item.thumb}
                onPress={() => {
                    navigation.push('CategoryScreen', {
                        categoryID: item.id,
                        categoryTitle: item.title
                    })
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={CATEGORIES}
                    keyExtractor={item => item.id}
                    renderItem={renderGirdHomeItem}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between' }} // tạo khoảng trống giữa 2 cột
                />
            </View>
        </View>
    )
}

export default HomeScreen