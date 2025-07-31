import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { Observable, tap } from 'rxjs';
import { ProductsManagerService } from './products-manager.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _productsManagerService = inject(ProductsManagerService);

  getProducts(): Observable<IProduct[]> {
    return this._httpClient
      .get<IProduct[]>('https://fakestoreapi.com/products')
      .pipe(
        tap((productsResponse) => {
          this._productsManagerService.addProducts(productsResponse);
        })
      );
  }
}
