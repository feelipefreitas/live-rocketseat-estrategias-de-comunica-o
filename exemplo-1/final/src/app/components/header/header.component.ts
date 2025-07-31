import { Component, inject } from '@angular/core';
import { ProductsManagerService } from '../../services/products-manager.service';
import { AsyncPipe } from '@angular/common';
import { CartSidebarComponent } from '../cart-sidebar/cart-sidebar.component';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe, CartSidebarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isSideBarOpen = false;

  readonly _productsManagerService = inject(ProductsManagerService);
}
