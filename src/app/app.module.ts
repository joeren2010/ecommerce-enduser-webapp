import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { InvoiceComponent } from './components/pages/invoice/invoice.component';
import { ProductsComponent } from './components/products/products.component';
import { WishlistComponent } from './components/pages/wishlist/wishlist.component';
import { CartlistComponent } from './components/pages/cartlist/cartlist.component';
import { ViewComponent } from './components/products/view/view.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SummaryComponent } from './components/pages/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ProfileComponent,
    InvoiceComponent,
    ProductsComponent,
    WishlistComponent,
    CartlistComponent,
    ViewComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NavBarComponent,
    NotFoundComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
