import {useState, useContext, createContext,} from "react";

export const CartContext = createContext()

export function CartProvider({ children }){

    const [items, setItems] = useState([])

    const clearItems = () => {
        setItems([])
    }

    const getItems = () => {
        return items
    }

    const getItemsLength = () =>{
        return items.length
    }

    const addToCart = (prev) => {

        const exist = !(items.find( elm => elm === prev ))

        if( exist ) setItems( [...items, prev] )

        return exist

    }

    const removeItem = id => {
        const list = items.filter( elm => elm.id !== id )
        setItems( list )
    }

    return (
        <CartContext.Provider value={{ getItemsLength, addToCart, getItems, clearItems, setItems, removeItem  }}>
            {children}
        </CartContext.Provider>
    )

}

export const useCart = () => useContext( CartContext )