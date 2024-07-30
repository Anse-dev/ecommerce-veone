import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex((item) => item.id === product.id);
            if (existingProductIndex >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += 1;
                toast.success('Product quantity updated in the cart!');
                return updatedCart;
            } else {
                toast.success('Product added to the cart!');
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
        toast.info('Product removed from the cart!');
    };

    const updateQuantity = (productId, quantity) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item => {
                if (item.id === productId) {
                    return { ...item, quantity };
                }
                return item;
            });
            toast.info('Product quantity updated!');
            return updatedCart.filter(item => item.quantity > 0);
        });
    };

    const value = {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
