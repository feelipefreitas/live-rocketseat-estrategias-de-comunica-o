import { Component, inject } from '@angular/core';
import { ProductsManagerService } from '../../services/products-manager.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-summary',
  imports: [AsyncPipe],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
})
export class CartSummaryComponent {
  readonly _productsManagerService = inject(ProductsManagerService);

  onBuyProducts(productsLength: number | undefined) {
    alert(`Você comprou ${productsLength} produtos!!!`);
  }
}
