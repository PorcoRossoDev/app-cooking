import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { FlatCategory } from '../../components'
import styles from './style'
import { PRODUCTS } from '../../data'

const CategoryScreen = ({ navigation, route }) => {

    const { categoryID, categoryTitile } = route.params
    const productData = PRODUCTS.filter(item => item.categoryId == categoryID)
    
    const renderGridProduct = ({ item }) => {
        return (
            <FlatCategory
                title = {item.title}
                thumb = {item.thumb}
                favorite = {item.favorite}
                view = {item.view}
                onPress={
                    () => {
                        navigation.push('ProductScreen', {
                            productID: item.id,
                            productTitle: item.title
                        })
                    }
                }
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList 
                    data={productData}
                    keyExtractor={item => item.id}
                    renderItem={renderGridProduct}
                />
            </View>
        </View>
    )
}

export default CategoryScreen