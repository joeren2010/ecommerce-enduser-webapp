import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { MyOrdersComponent } from './components/account/my-orders/my-orders.component';
import { MyProfileComponent } from './components/account/my-profile/my-profile.component';
import { PaymentsComponent } from './components/account/payments/payments.component';
import { PreferencesComponent } from './components/account/preferences/preferences.component';
import { AuthComponent } from './components/auth/auth.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { BuyAgainComponent } from './components/cart/buy-again/buy-again.component';
import { SavedItemsComponent } from './components/cart/saved-items/saved-items.component';
import { StartShoppingComponent } from './components/cart/start-shopping/start-shopping.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ChangeAddressComponent } from './components/checkout/change-address/change-address.component';
import { ChangePaymentComponent } from './components/checkout/change-payment/change-payment.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CancelledOrdersComponent } from './components/orders/cancelled-orders/cancelled-orders.component';
import { TrackOrdersComponent } from './components/orders/track-orders/track-orders.component';
import { ProductsComponent } from './components/products/products.component';
import { ClothingsComponent } from './components/products/clothings/clothings.component';
import { ComputersComponent } from './components/products/computers/computers.component';
import { ElectronicsComponent } from './components/products/electronics/electronics.component';
import { FurnituresComponent } from './components/products/furnitures/furnitures.component';
import { GroceryComponent } from './components/products/grocery/grocery.component';
import { JewelryComponent } from './components/products/jewelry/jewelry.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MyListsComponent } from './components/wishlist/my-lists/my-lists.component';
import { MiscListComponent } from './components/wishlist/misc-list/misc-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:"", redirectTo:"/products", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"account", children: [
    {path:"", component: AccountComponent},
    {path:"my-orders", component: MyOrdersComponent},
    {path:"my-profile", component: MyProfileComponent},
    {path:"payments", component: PaymentsComponent},
    {path:"preferences", component: PreferencesComponent},
  ]},    
  {path:"auth", children: [
    {path:"", component: AuthComponent},
    {path:"change-password", component: ChangePasswordComponent},
    {path:"login", component: LoginComponent},
    {path:"register", component: RegisterComponent},
  ]},
  {path:"cart", children: [
    {path:"", component: CartComponent},
    {path:"buy-again", component: BuyAgainComponent},
    {path:"saved-items", component: SavedItemsComponent},
    {path:"start-Shopping", component: StartShoppingComponent},
  ]},  
  {path:"checkout", children: [
    {path:"", component: CheckoutComponent},
    {path:"change-address", component: ChangeAddressComponent},
    {path:"change-payment", component: ChangePaymentComponent},
  ]},   
  {path:"orders", children: [
    {path:"", component: OrdersComponent},
    {path:"cancelled-orders", component: CancelledOrdersComponent},
    {path:"track-orders", component: TrackOrdersComponent},
  ]},   
  {path:"products", children: [
    {path:"", component: ProductsComponent},
    {path:"clothings", component: ClothingsComponent},
    {path:"computers", component: ComputersComponent},
    {path:"electronics", component: ElectronicsComponent},
    {path:"furnitures", component: FurnituresComponent},
    {path:"grocery", component: GroceryComponent},
    {path:"jewelry", component: JewelryComponent},
  ]},
  {path:"wishlist", children: [
    {path:"", component: WishlistComponent},
    {path:"misc-list", component: MiscListComponent},
    {path:"my-lists", component: MyListsComponent},
  ]},   
  {path:"**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
