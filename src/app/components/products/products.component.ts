import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  fetching: boolean = false;
  products: any[] = [];

  constructor(public productsService: ProductsService,) { }
  /* here are other ways to write above code
     * constructor(public ps: ProductsService) { }  
    if your service is name: data.service.ts, then
     * constructor(public db: DataService) { } */

  ngOnInit(): void {
    this.productsService.getProducts();
    this.productsService.productsSub.subscribe(res => {
      if(res.length !== 0) {
        this.products = Object.assign([], res);
        this.fetching = false;
        console.log(this.products);        
      }
    })    
  }

}
