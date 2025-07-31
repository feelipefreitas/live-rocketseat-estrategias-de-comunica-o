import { Component, inject } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ProductListComponent, CartSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly _productsService = inject(ProductsService);

  ngOnInit() {
    this.getProducts();
  }

  private getProducts() {
    this._productsService.getProducts().subscribe();
  }
}
