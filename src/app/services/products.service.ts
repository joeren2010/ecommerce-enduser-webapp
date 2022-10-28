import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public products: any[] = [];
  public wishlistProducts: any[] = [];
  public savedItems: any[] = [];
  productsRetreived: boolean = false;

  productsSub: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient, private toast: ToastrService) { }

  getProducts(){
    if (!this.productsRetreived) {
      this.http.get('https://fakestoreapi.com/products')
      .subscribe((res) => {
        this.productsSub.next(Object.assign([], res))
        this.productsRetreived = true
      });
    }
  }

   addProductToShoppingCart(prd: any, prdRemoveBool: boolean = false, prdIdx: number = -1) {
    if(this.products.some(x => x["id"] === prd["id"])) {
      let idx = this.products.findIndex(x => x["id"] === prd["id"]);
      this.products[idx]["quantity"] += 1; 
      this.toast.info(prd['title'], "Already Added to Cart, Quantity Updated")
    } else {
      this.products.push({
        ...prd,
        "quantity": 1
      });
      this.toast.success(prd['title'], "Product Added to Cart");
    }

    if(prdRemoveBool) {
      this.wishlistProducts.splice(prdIdx, 1);
      this.savedItems.splice(prdIdx, 1);
    }
    // this.prodSub.next([...this.cartProducts]);
  }

  addProductToWishList(prd: any, prdRemoveBool: boolean = false, prdIdx: number = -1) {
    if(!this.wishlistProducts.some(x => x["id"] === prd["id"])) {
      this.wishlistProducts.push({
        ...prd,
        "quantity": 1
      }); 
      this.toast.success(prd['title'], "Product Added to Wishlist");
    } else {
      this.toast.info(prd['title'], "Already Added to Wishlist");
    }

    if(prdRemoveBool) {
      this.products.splice(prdIdx, 1);
    }
  }

  saveForLater(prd: any, prdRemoveBool: boolean = false, prdIdx: number = -1) {
    if(!this.savedItems.some(x => x["id"] === prd["id"])) {
      this.savedItems.push({
        ...prd,
        "quantity": 1
      }); 
      this.toast.success(prd['title'], "Product Successfully Saved For Later");
    } else {
      this.toast.info(prd['title'], "Product Already In Saved Items");
    }

    if(prdRemoveBool) {
      this.products.splice(prdIdx, 1);
    }
  }


  // saveForLater(prd: any, removeBool: boolean, prdIdx: number) {
  //   throw new Error('Method not implemented.');
  // }
}
