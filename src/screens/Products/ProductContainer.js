import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import ProductList from './ProductList'

const data = require('../../../assets/data/product.json')

export default function ProductContainer(){


    const [products, setProducts] = React.useState([])

    React.useEffect(()=>{
        setProducts(data)

        return () => {
            console.log(' -------------- funcionou --------------')
            console.log(' -------------- funcionou --------------')
            console.log(' -------------- funcionou --------------')
            setProducts([])
        }
    },[])

    return(
        <View style={styles.container}>
            <View style={{marginTop:100}}/>
            <Text>Product Container</Text>
            <FlatList
            // horizontal
            data={products}
            renderItem={({item}) => <ProductList item={item}/>}
            keyExtractor={item => item.name}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})