import { View, Text, Button, TextInput, FlatList, StyleSheet, ScrollView } from "react-native"
import { useState } from "react"

import { useCart } from "../Contexts/Cart"

import Product from "../Components/Product"


export default function CartPage () {
    
    const { getItems, clearItems, removeItem } = useCart()

    const items = getItems()

    const clear = () => clearItems()
        
    const manageRemove = id => removeItem( id )
    
    const productComponent = item => {

        return <Product
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    title='Remover do carrinho'
                    onPress={() => manageRemove( item.id )}
                />
    }

    const getTotalValue = () => {
        
        const totalPrice = items.reduce((lot, current) => lot+current.price, 0 )
        
        return totalPrice
        //return items.reduce( elm => elm.price, 0 )
    }
    

    return (
        <View style={{flex:1}}>
            <Button title='Limpar Carrinho' onPress={ clear }></Button>
            <Text>Valor Total: {getTotalValue()} R$</Text>
            <ScrollView>
                {
                    items.length > 0 ? 
                        items.map( elm => productComponent( elm ))
                        :
                        <Text>Não há itens no carrinho</Text>
                }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    // :{ },

    flatlist:{
        backgroundColor: 'red',
        width: '100%',
        height: '100%'
    },

    input: {
        borderWidth: 1,
        padding: 10,
        height: 50
    }

})