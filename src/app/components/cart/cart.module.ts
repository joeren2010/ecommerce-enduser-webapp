import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { BuyAgainComponent } from './buy-again/buy-again.component';
import { SavedItemsComponent } from './saved-items/saved-items.component';
import { StartShoppingComponent } from './start-shopping/start-shopping.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartComponent,
    SavedItemsComponent,
    BuyAgainComponent,
    StartShoppingComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule       
  ]
})
export class CartModule { }
