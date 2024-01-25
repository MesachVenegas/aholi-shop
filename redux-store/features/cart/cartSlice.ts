import { ProductProps } from '@/types/product';
import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: ProductProps[] = []

export const cartSlice = createSlice({
  name: 'cartProducts',
  initialState,
  reducers: {
      addProductToCart: (state, actions: PayloadAction<ProductProps>) => {
        state.push(actions.payload)
      }
  }
});

export const { addProductToCart } = cartSlice.actions;

export default cartSlice.reducer;

