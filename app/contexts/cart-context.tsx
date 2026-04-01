'use client'

import { createContext, ReactNode, useContext, useState } from "react";

interface CarteItem {
    productId: number
    quantity: number 
}

interface cartContextType {
    items: CarteItem[]
    addToCart: (productId: number) => void
}

const cartContext = createContext({} as cartContextType)

interface CartProviderProps {
    children: ReactNode,
}

export function CartProvider({children}: CartProviderProps) {
    const [ cartItems, setCartItems] = useState<CarteItem[]>([])

    function addToCart(productId: number) {
        setCartItems(state => {
            const productInCart = state.some(item => item.productId === productId)

            if(productInCart) {
                return state.map(item => {

                    if(item.productId === productId) {
                        return {...item, quantity: item.quantity + 1}
                    }else {
                        return item
                    }
                })

            }else {
                return [...state,{ productId, quantity: 1}]
            }
        })
    }
    return (
        <cartContext.Provider value={{items: cartItems, addToCart}}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext)