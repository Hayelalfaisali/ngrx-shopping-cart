import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart.model';

// Add item to cart
export const addItem = createAction(
    '[Cart] Add Item',
    props<{ item: CartItem }>()
);

// Remove item from cart
export const removeItem = createAction(
    '[Cart] Remove Item',
    props<{ productId: number }>()
);

export const updateProductQuantity = createAction(
    '[Cart] Update Product Quantity',
    props<{ productId: string; quantity: number }>()
);


// Clear all items in the cart
export const clearCart = createAction('[Cart] Clear Cart');
