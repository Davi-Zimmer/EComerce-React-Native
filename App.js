import { View, Text, TouchableOpacity,  SafeAreaView, StyleSheet } from 'react-native'


import Icon from 'react-native-vector-icons/Ionicons'; // Importando o ícone do carrinho
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import Home from './src/pages/Home'
import Login from './src/pages/Login'
import Products from './src/pages/Products'
import CartPage from './src/pages/CartPage'

//import { AuthProvider, useAuth } from './src/Contexts/DUO'
import { AuthProvider, useAuth } from './src/Contexts/Auth'
import { CartProvider, useCart } from './src/Contexts/Cart';


const Drawer = createDrawerNavigator()

export default function App (){
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>
        <CartProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </CartProvider>
      </AuthProvider>
    </SafeAreaView>
  )
}

const Navigator = () => {

  const { user } = useAuth()

  return (
    <>
      {
        user ? (
          <Drawer.Navigator initialRouteName='Products'>

            <Drawer.Screen name='E-Comerce' component={Products} options = {{
                headerRight: () => <Cart />
            }}/>

            <Drawer.Screen name='Home' component={Home} />

            <Drawer.Screen name='Cart' component={CartPage} />
          </Drawer.Navigator>
        ) : <Login />
      }
    </>
  )
}

const Cart = () => {

  const navigation = useNavigation()

  const { getItemsLength } = useCart()


  return (
    <TouchableOpacity style={styles.cartIcon}
    onPress={() => navigation.navigate('Cart')}>
      <Text>{ getItemsLength() }</Text>
      <Icon name="cart-outline" size={24} color="#000" />

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cartIcon: {
      flexDirection: 'row',
      padding: 5,
      gap: 10
  }
})