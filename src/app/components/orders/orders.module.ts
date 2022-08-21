import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { TrackOrdersComponent } from './track-orders/track-orders.component';
import { CancelledOrdersComponent } from './cancelled-orders/cancelled-orders.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderViewComponent } from './order-view/order-view.component';


@NgModule({
  declarations: [
    OrdersComponent,
    TrackOrdersComponent,
    CancelledOrdersComponent,
    OrderViewComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule       
  ]
})
export class OrdersModule { }
