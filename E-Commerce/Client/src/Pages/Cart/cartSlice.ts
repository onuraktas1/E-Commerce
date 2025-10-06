﻿import type {Cart} from "../../Model/ICart.ts";
import {createSlice} from "@reduxjs/toolkit";

interface CartState{
    cart:Cart | null,
}

const initialState: CartState = {
    cart:null
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers: {
        setCart:(state,action)=> {
            state.cart = action.payload;
        }
    }
})


export const {setCart} = cartSlice.actions
