import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from '../../store/cart/cart.model';
import * as CartSelectors from '../../store/cart/cart.selectors';
import * as CartActions from '../../store/cart/cart.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;
  totalPrice$: Observable<number>;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(CartSelectors.selectCartItems);
    this.totalPrice$ = this.store.select(CartSelectors.selectTotalPrice);
  }

  removeItem(productId: number) {
    this.store.dispatch(CartActions.removeItem({ productId }));
  }
  onQuantityChange(event: Event, productId: number): void {
    const inputElement = event.target as HTMLInputElement;
    const quantity = inputElement?.valueAsNumber;
    if (!isNaN(quantity)) {
      this.updateQuantity(productId.toString(), quantity);
    }
  }
  
  updateQuantity(productId: string, quantity: number): void {
    this.store.dispatch(CartActions.updateProductQuantity({ productId, quantity }));
  }
  

  
  

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }
}
