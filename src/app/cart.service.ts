import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private itemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.itemsSubject.asObservable();

  getItems(): CartItem[] {
    return this.itemsSubject.value;
  }

  addToCart(item: CartItem) {
    const items = [...this.itemsSubject.value];
    const index = items.findIndex(i => i.productId === item.productId);
    if (index !== -1) {
      items[index].quantity += item.quantity;
    } else {
      items.push(item);
    }
    this.itemsSubject.next(items);
  }

  updateQuantity(productId: number, quantity: number) {
    const items = this.itemsSubject.value.map(item =>
      item.productId === productId ? { ...item, quantity } : item
    );
    this.itemsSubject.next(items);
  }

  removeItem(productId: number) {
    const items = this.itemsSubject.value.filter(item => item.productId !== productId);
    this.itemsSubject.next(items);
  }

  clearCart() {
    this.itemsSubject.next([]);
  }

  getTotalPrice(): number {
    return this.itemsSubject.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
