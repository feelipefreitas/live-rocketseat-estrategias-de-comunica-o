import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsManagerService {
  private products = new BehaviorSubject<IProduct[]>([]);
  readonly products$ = this.products
    .asObservable()
    .pipe(map((productsList) => structuredClone(productsList)));

  private cartProducts = new BehaviorSubject<IProduct[]>([]);
  readonly cartProducts$ = this.cartProducts
    .asObservable()
    .pipe(map((cartProductsList) => structuredClone(cartProductsList)));

  addProducts(products: IProduct[]) {
    this.products.next(structuredClone(products));
  }

  addCartProduct(product: IProduct) {
    const currentCartList = this.cartProducts.value;

    const newCartList = [...currentCartList, structuredClone(product)];

    this.cartProducts.next(newCartList);
  }

  removeCartProduct(productIndex: number) {
    const newCartList = this.cartProducts.value;
    newCartList.splice(productIndex, 1);

    this.cartProducts.next(newCartList);
  }
}
