import { CartItem } from '~/types';

type ActionTypes =
  | {
      type: 'cart/addItem';
      payload: CartItem;
    }
  | {
      type: 'cart/removeItem';
      payload: string;
    }
  | {
      type: 'cart/updateQuantity';
      payload: CartItem;
    }
  | {
      type: 'cart/clearCart';
    };

export const initialState: {
  cartItems: CartItem[];
} = {
  cartItems: [],
};

export const cartReducer = (
  state: typeof initialState,
  action: ActionTypes
) => {
  switch (action.type) {
    case 'cart/addItem': {
      const sameIdx = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );

      if (sameIdx !== -1) {
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[sameIdx] = {
          ...updatedCartItems[sameIdx],
          quantity:
            updatedCartItems[sameIdx].quantity + action.payload.quantity,
        };

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }

    case 'cart/removeItem':
      return {
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    case 'cart/updateQuantity': {
      const updatedItem = state.cartItems.find(
        item => item.id === action.payload.id
      );
      if (!updatedItem) return state;

      const updatedCartItems = state.cartItems.map(item =>
        item.id === action.payload.id ? action.payload : item
      );

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    }

    case 'cart/clearCart':
      return {
        cartItems: [],
      };

    default:
      throw new Error('Unhandled action type');
  }
};
