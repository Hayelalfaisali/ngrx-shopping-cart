import { Component } from '@angular/core';
import { Product } from '../../model/product.model';
import { Store } from '@ngrx/store';
import * as CartActions from '../../store/cart/cart.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true, // 👈 If you're using standalone components
  imports: [CommonModule], // 👈 Add this
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Perfume A', price: 50 },
    { id: 2, name: 'Perfume B', price: 80 },
    { id: 3, name: 'Perfume C', price: 120 }
  ];

  constructor(private store: Store) {}

  addToCart(product: Product) {
    this.store.dispatch(
      CartActions.addItem({
        item: {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }
      })
    );
  }
}
