import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public totalItems: number = 0;
  public totalPrice: number = 0;

  constructor(public productsService: ProductsService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.calculate();
  }

  addPrdToWishlist(prd: any, removeBool: boolean, prdIdx: number) {
  this.productsService.addProductToWishList(prd, removeBool, prdIdx);
  this.calculate();
  }

  saveForLater(prd: any, removeBool: boolean, prdIdx: number) {
  this.productsService.saveForLater(prd, removeBool, prdIdx);
  this.calculate();
  }

  removeProductFromCart(prdIdx: number) {
    let elements = this.productsService.products.splice(prdIdx, 1);
    this.toast.info(elements[0]['title'], "Product Removed from Cart");
    this.calculate();
  }

  calculate() {
    this.totalItems = this.productsService.products.reduce((prev, next) => prev + next['quantity'], 0)
    this.totalPrice = this.productsService.products.reduce((prev, next) => prev + (next['price'] * next['quantity']), 0);
  }  

}
