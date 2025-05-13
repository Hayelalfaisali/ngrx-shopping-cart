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
    {
      id: 1,
      name: 'Perfume A',
      price: 50,
      image: 'https://smartfox.co.nz/cdn/shop/files/28362980706_TBKUOBDPK2SW.jpg?v=1725144018&width=1214',
      description: 'A refreshing floral scent perfect for daytime wear, with notes of jasmine and citrus.'
    },
    {
      id: 2,
      name: 'Perfume B',
      price: 80,
      image: 'https://i.ebayimg.com/images/g/R8IAAOSw1gxnjobY/s-l1200.jpg',
      description: 'A deep and warm fragrance with hints of vanilla, musk, and cedarwood.'
    },
    {
      id: 3,
      name: 'Perfume C',
      price: 120,
      image: 'https://leoncechenal.com/wp-content/uploads/2022/05/iconic_french_perfumes.webp',
      description: 'A luxurious blend of spices and rare blossoms, designed for special evenings.'
    },
    {
      id: 4,
      name: 'Perfume A',
      price: 50,
      image: 'https://smartfox.co.nz/cdn/shop/files/28362980706_TBKUOBDPK2SW.jpg?v=1725144018&width=1214',
      description: 'A refreshing floral scent perfect for daytime wear, with notes of jasmine and citrus.'
    },
    {
      id: 5,
      name: 'Perfume B',
      price: 80,
      image: 'https://i.ebayimg.com/images/g/R8IAAOSw1gxnjobY/s-l1200.jpg',
      description: 'A deep and warm fragrance with hints of vanilla, musk, and cedarwood.'
    },
    {
      id: 6,
      name: 'Perfume C',
      price: 120,
      image: 'https://leoncechenal.com/wp-content/uploads/2022/05/iconic_french_perfumes.webp',
      description: 'A luxurious blend of spices and rare blossoms, designed for special evenings.'
    }
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
