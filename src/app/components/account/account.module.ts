import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PaymentsComponent } from './payments/payments.component';
import { PreferencesComponent } from './preferences/preferences.component';

import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccountComponent,
    MyOrdersComponent,
    MyProfileComponent,
    PaymentsComponent,
    PreferencesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule        
  ]
})
export class AccountModule { }
