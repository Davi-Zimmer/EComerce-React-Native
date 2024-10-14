import { View, Text, Button, TextInput, StyleSheet, FlatList, Image, Alert } from "react-native";
import { useEffect, useState } from "react";
import { useAuth } from "../Contexts/Auth";
import Product from "../Components/Product";
import { useCart } from "../Contexts/Cart";

const products = [
    { id: '1', name: 'Camisa', price: 29.99, image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Calça', price: 49.99, image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Tênis', price: 89.99, image: 'https://via.placeholder.com/150' },
    { id: '4', name: 'Jaqueta', price: 99.99, image: 'https://via.placeholder.com/150' },
    { id: '5', name: 'Boné', price: 19.99, image: 'https://via.placeholder.com/150' },
]

export default function Products() {

    const { addToCart } = useCart()
    
    const [ filteredItems, setFilteredItems ] = useState( products )

    const [ filter, setFilter ] = useState('')

    const { logout } = useAuth()
        
    useEffect( () => {

        const filtered = products.filter( elm => {
            const a = elm.name.toLowerCase()
            const b = filter.toLowerCase()
            
            return a.includes( b )
        } )
        
        setFilteredItems( filtered )

    }, [filter])

    const handleItem = item => {

        const success = addToCart( item )
    
        if( success ){
            Alert.alert('Salvo no Carrinho')
        } else {
            Alert.alert('Esse item ja esta no carrinho')
        }

        //console.log( getItemsLength() )
    }

    const productComponent = ({item}) => {
        return <Product 
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    title='Adicionar ao carrinho'
                    onPress={ () => handleItem(item) }
                />
    }

    const handleLogout = logout

    return (
        <View style={{flex:1}}>
            <Button title='Logout' onPress={handleLogout}></Button>

            <TextInput style={styles.input} value={filter} onChangeText={setFilter} placeholder='Buscar'></TextInput>

            <FlatList 
                data={ filteredItems }
                renderItem={ productComponent }
            >
            </FlatList>

        </View>
    )
    
}

const styles = StyleSheet.create({
    // :{ },

    input: {
        borderWidth: 1,
        padding: 10
    }

})