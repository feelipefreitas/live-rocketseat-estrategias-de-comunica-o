import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProductsManagerService } from '../../services/products-manager.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-cart-sidebar',
  imports: [AsyncPipe],
  templateUrl: './cart-sidebar.component.html',
  styleUrl: './cart-sidebar.component.css',
})
export class CartSidebarComponent {
  @Input() isOpen = false;

  @Output() sideBarClosed = new EventEmitter<void>();

  readonly _productsManagerService = inject(ProductsManagerService);

  onCloseClick() {
    this.sideBarClosed.emit();
  }

  onRemoveProduct(productIndex: number) {
    this._productsManagerService.removeCartProduct(productIndex);
  }
}
