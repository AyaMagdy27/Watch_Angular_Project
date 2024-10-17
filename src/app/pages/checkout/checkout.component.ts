import { Component } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { ProductService, Product } from '../../product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [PageTitleComponent, CommonModule, RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
 
  cart: Product[] = [];
  totalPrice = 0;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.cartObservable.subscribe(cart => {
      this.cart = cart;
      this.updateTotalPrice();
    });
    this.productService.loadCart();
  }

  updateTotalPrice(): void {
    this.totalPrice = this.cart.reduce((total, product) => total + (product.price * (product.quantity || 0)), 0);
  }

  updateCart(): void {
    this.cart.forEach(product => {
      const quantityInput = document.querySelector(`input[data-product-id="${product.id}"]`) as HTMLInputElement;
      if (quantityInput) {
        product.quantity = parseInt(quantityInput.value);
      }
    });
    this.productService.updateCart();
  }

  removeCartItem(productId: number): void {
    this.productService.removeFromCart(productId);
    this.updateTotalPrice();
  }
}
