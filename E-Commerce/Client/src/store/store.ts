import {configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "../Pages/counter/counterSlice.ts";
import {cartSlice} from "../Pages/Cart/cartSlice.ts";
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        cart: cartSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;