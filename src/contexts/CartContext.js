import React, { createContext, useState } from "react";

export const CartContext = createContext({});

export default function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState();

    function addItemCart(newItem) {
        const indexItem = cart.findIndex(item => item.id === newItem.id);

        if (indexItem !== -1) {
            let cartList = cart;
            
            cartList[indexItem].amount ++;
            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].price;
            
            setCart(cartList);
            handleTotalCart(cartList);
            return;
        }

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        }

        const cartList = [...cart, data];
        setCart(cartList);
        handleTotalCart(cartList);
    }

    function removeItemCart(item) {
        const indexItem = cart.findIndex(previousItem => previousItem.id === item.id);

        if (indexItem !== -1 && cart[indexItem]?.amount > 1) {
            let cartList = [...cart];
            
            cartList[indexItem].amount --;
            cartList[indexItem].total = cartList[indexItem].total - cartList[indexItem].price;
            
            setCart(cartList);
            handleTotalCart(cartList);
            return;
        }

        const removeItem = cart.filter(product => product.id !== item.id);
        setCart(removeItem);
        handleTotalCart(removeItem);
    }

    function handleTotalCart(items) {
        let cartList = items;
        let result = cartList.reduce((acc, obj) => { return acc + obj.total }, 0);
        setTotal(result);
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                cartAmount: cart.length,
                addItemCart,
                removeItemCart,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};