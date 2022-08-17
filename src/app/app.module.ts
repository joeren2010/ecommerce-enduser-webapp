import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './components/auth/auth.module';
import { AccountModule } from './components/account/account.module';
import { CartModule } from './components/cart/cart.module';
import { CheckoutModule } from './components/checkout/checkout.module';
import { OrdersModule } from './components/orders/orders.module';
import { ProductsModule } from './components/products/products.module';
import { WishlistModule } from './components/wishlist/wishlist.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,     
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    AboutComponent        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccountModule,
    AuthModule,
    CartModule,
    CheckoutModule,
    OrdersModule,
    ProductsModule,
    WishlistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
