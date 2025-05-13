import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.model';
import { CartItem } from './cart.model';

// Get the cart feature state
export const selectCartState = createFeatureSelector<CartState>('cart');

// Get all items
export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.items
);

// Get total number of items
export const selectTotalItems = createSelector(
  selectCartItems,
  (items: CartItem[]) => items.reduce((total, item) => total + item.quantity, 0)
);

// Get total cart price
export const selectTotalPrice = createSelector(
  selectCartItems,
  (items: CartItem[]) =>
    items.reduce((total, item) => total + item.price * item.quantity, 0)
);
