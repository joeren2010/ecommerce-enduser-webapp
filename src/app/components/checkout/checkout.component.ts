import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  totalPrice: number = 0;

  cardImages: string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1200px-Visa.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/1200px-Mastercard_2019_logo.svg.png",
    "https://trak.in/wp-content/uploads/2020/01/Rupay-Cards-Big-1.jpg"
  ];

  constructor(public productsService : ProductsService) { }

  ngOnInit(): void {
    this.totalPrice = this.productsService.products.reduce((prev, next) => prev + (next['price'] * next['quantity']), 0);
  }

}
