import { NgModule } from '@angular/core';
import { WishlistComponent } from './wishlist.component';
import { MiscListComponent } from './misc-list/misc-list.component';
import { MyListsComponent } from './my-lists/my-lists.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WishlistComponent,
    MyListsComponent,
    MiscListComponent,    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule       
  ]
})
export class WishlistModule { }
