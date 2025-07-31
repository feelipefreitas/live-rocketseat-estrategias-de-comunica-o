import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsManagerService } from '../../services/products-manager.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  readonly _productsManagerService = inject(ProductsManagerService);

  addToCart(product: IProduct) {
    this._productsManagerService.addCartProduct(product);
  }
}
