import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CartSidebarComponent } from './components/cart-sidebar/cart-sidebar.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ProductListComponent,
    CartSummaryComponent,
    CartSidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
