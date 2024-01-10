import {products} from "../../data/data";
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: products,
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
};

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        add: (state, action) => {
            const productIndex = state.cart.findIndex((product) => product.id === action.payload.id);
            if (productIndex >= 0) {
                state.cart[productIndex].quantity += 1;
            } else {
                state.cart.push(action.payload);
            }
        },

        getTotal: (state) => {
            const { totalQuantity, totalPrice } = state.cart.reduce((cartTotal, product) => {
                    const { price, quantity } = product;
                    const productTotal = price * quantity;
                    cartTotal.totalPrice += productTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );
            state.totalPrice = totalPrice;
            state.totalQuantity = totalQuantity;
        },

        remove: (state, action) => {
            state.cart = state.cart.filter((product) => product.id !== action.payload);
        },

        increase: (state, action) => {
            state.cart = state.cart.map((product) => {
                if (product.id === action.payload) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
        },

        decrease: (state, action) => {
            state.cart = state.cart.map((product) => {
                if (product.id === action.payload) {
                    return { ...product, quantity: product.quantity - 1 };
                }
                return product;
            });
        },
    },
});

const {reducer: cartReducer, actions: {
    getTotal,
    add,
    decrease,
    increase,
    remove
}} = cartSlice;

export {
    cartReducer, getTotal, add, decrease, increase, remove
}

