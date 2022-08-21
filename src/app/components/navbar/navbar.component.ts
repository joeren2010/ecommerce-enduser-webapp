import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

//links for menu items
export const menuItems: any[] = [
  { path: '/products', title: 'Products', icon: '', class: '' },
  { path: '/about', title: 'About Us', icon: '', class: '' },
  { path: '/cart', title: 'My cart', icon: '', class: '' },
  { path: '/wishlist', title: 'Wishlist', icon: '', class: '' },
  { path: '/orders', title: 'Orders', icon: '', class: '' },
  { path: '/account', title: 'Account', icon: '', class: '' },
];

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public productsService : ProductsService) { }

  ngOnInit(): void {
  }

}
