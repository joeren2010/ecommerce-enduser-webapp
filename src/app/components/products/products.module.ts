import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ClothingsComponent } from './clothings/clothings.component';
import { ComputersComponent } from './computers/computers.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FurnituresComponent } from './furnitures/furnitures.component';
import { GroceryComponent } from './grocery/grocery.component';
import { JewelryComponent } from './jewelry/jewelry.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,    
    ClothingsComponent, 
    ComputersComponent, 
    ElectronicsComponent, 
    FurnituresComponent, 
    GroceryComponent, 
    JewelryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule    
  ]
})
export class ProductsModule { }
