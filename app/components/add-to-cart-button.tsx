'use client'
import { useCart } from "../contexts/cart-context"

export interface AddToCartButtonProps {
    productId: number
}


export  function AddToCartButton({productId}:AddToCartButtonProps) {
    const {addToCart} = useCart()

    function HandleAddProductToCart() {
        addToCart(productId)
    }
    return (
        <button 
        type="button"
        onClick={HandleAddProductToCart}
        className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white">
            Adicionar ao carrinho
        </button>
    )
}