import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { CartItem } from '~/types';

interface CartState {
  cartItems: CartItem[];
  getItemCount: () => number;
  getTotalPrice: () => number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (item: CartItem) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>()(
  immer((set, get) => ({
    cartItems: [],

    getTotalPrice: () =>
      get().cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    getItemCount: () =>
      get().cartItems.reduce((acc, item) => acc + item.quantity, 0),

    addItem: newItem =>
      set(state => {
        const sameIdx = state.cartItems.findIndex(
          item => item.id === newItem.id
        );
        if (sameIdx !== -1) {
          state.cartItems[sameIdx].quantity += newItem.quantity;
        } else {
          state.cartItems.push(newItem);
        }
      }),

    removeItem: id =>
      set(state => {
        state.cartItems = state.cartItems.filter(item => item.id !== id);
      }),

    updateQuantity: updatedItem =>
      set(state => {
        const sameIdx = state.cartItems.findIndex(
          item => item.id === updatedItem.id
        );
        state.cartItems[sameIdx].quantity = updatedItem.quantity;
      }),

    clearCart: () =>
      set(state => {
        state.cartItems = [];
      }),
  }))
);

// const useCartStore = create<CartState>()((set, get) => ({
//   cartItems: [],

//   getTotalPrice: () =>
//     get().cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
//   getItemCount: () =>
//     get().cartItems.reduce((acc, item) => acc + item.quantity, 0),

//   addItem: newItem =>
//     set(state => {
//       const sameIdx = state.cartItems.findIndex(item => item.id === newItem.id);

//       if (sameIdx !== -1) {
//         const newCartItems = [...state.cartItems];
//         newCartItems[sameIdx].quantity += newItem.quantity;
//         return {
//           cartItems: newCartItems,
//         };
//       }
//       return {
//         cartItems: [...state.cartItems, newItem],
//       };
//     }),

//   removeItem: id =>
//     set(state => ({
//       cartItems: state.cartItems.filter(item => item.id !== id),
//     })),

//   updateQuantity: updatedItem =>
//     set(state => ({
//       cartItems: state.cartItems.map(item =>
//         item.id === updatedItem.id ? updatedItem : item
//       ),
//     })),

//   clearCart: () =>
//     set(() => ({
//       cartItems: [],
//     })),
// }));

export { useCartStore };
