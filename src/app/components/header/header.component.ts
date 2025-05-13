import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../cart.service';
import { CommonModule, AsyncPipe, NgIf } from '@angular/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, AsyncPipe, NgIf, RouterLink],
})
export class HeaderComponent implements OnInit {
  cartCount$!: Observable<number>;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.cartCount$ = this.cartService.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + item.quantity, 0))
    );
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }
}
