import { createReducer, on } from '@ngrx/store';
import { CartState } from './cart.model';
import * as CartActions from './cart.actions';

// Initial cart state
const initialState: CartState = {
  items: []
};

export const cartReducer = createReducer(
  initialState,

  // Add item
  on(CartActions.addItem, (state, { item }) => {
    const existingItem = state.items.find(i => i.productId === item.productId);
    if (existingItem) {
      // If already exists, update quantity
      return {
        ...state,
        items: state.items.map(i =>
          i.productId === item.productId
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      };
    } else {
      // If new, add to cart
      return {
        ...state,
        items: [...state.items, item]
      };
    }
  }),

  // Remove item
  on(CartActions.removeItem, (state, { productId }) => ({
    ...state,
    items: state.items.filter(item => item.productId !== productId)
  })),

  // Update quantity
  on(CartActions.updateProductQuantity, (state, { productId, quantity }) => ({
    ...state,
    items: state.items.map(item =>
      item.productId === Number(productId) ? { ...item, quantity } : item
    )
  })),

  // Clear cart
  on(CartActions.clearCart, () => ({
    items: []
  }))
);
