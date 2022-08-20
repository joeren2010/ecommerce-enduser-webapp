import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor(public productsService : ProductsService, private toast: ToastrService) { }

  ngOnInit(): void {
  }

  removeProductFromWishlist(prdIdx: number) {
    let elements = this.productsService.wishlistProducts.splice(prdIdx, 1);
    this.toast.info(elements[0]['title'], "Product Removed from Wishlist");
  }
}
