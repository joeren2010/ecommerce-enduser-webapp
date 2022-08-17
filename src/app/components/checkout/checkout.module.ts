import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { ChangeAddressComponent } from './change-address/change-address.component';
import { ChangePaymentComponent } from './change-payment/change-payment.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckoutComponent,
    ChangeAddressComponent,
    ChangePaymentComponent    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule       
  ]
})
export class CheckoutModule { }
