import { createContext, useReducer } from 'react';
import { cartReducer, initialState } from '~/context/cartReducer';
import { CartItem } from '~/types';

type CartContextType = {
  cartItems: CartItem[];
  totalPrice: number;
  itemCount: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (item: CartItem) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: { children: React.ReactNode }) {
  const [{ cartItems }, dispatch] = useReducer(cartReducer, initialState);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  function addItem(item: CartItem) {
    dispatch({ type: 'cart/addItem', payload: item });
  }

  function removeItem(id: string) {
    dispatch({ type: 'cart/removeItem', payload: id });
  }

  function updateQuantity(item: CartItem) {
    dispatch({ type: 'cart/updateQuantity', payload: item });
  }

  function clearCart() {
    dispatch({ type: 'cart/clearCart' });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        itemCount,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
