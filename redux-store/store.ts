import { configureStore } from '@reduxjs/toolkit';
import cartReducer  from '@/redux-store/features/cart/cartSlice';


export const store = configureStore({
  reducer: {
    myCart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
