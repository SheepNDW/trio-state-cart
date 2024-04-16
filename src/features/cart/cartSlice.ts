import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '~/redux-store';
import type { CartItem } from '~/types';

interface CartState {
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const sameIdx = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );

      if (sameIdx !== -1) {
        state.cartItems[sameIdx].quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },
    updateQuantity(state, action: PayloadAction<CartItem>) {
      const item = state.cartItems.find(item => item.id === action.payload.id);

      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export const getTotalPrice = (state: RootState) => {
  return state.cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
};

export const getItemCount = (state: RootState) => {
  return state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0);
};

export default cartSlice.reducer;
