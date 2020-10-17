import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NewsComponent } from './news/news.component';
import { BodyComponent } from './body/body.component';



const routes: Routes = [ 
  {path:"checkout", component:CheckoutComponent}, 
  {path:"", component:BodyComponent}, 
  {path:"login", component:LoginComponent}, 
  {path:"productDetail", component:ProductDetailComponent}, 
  {path:"contact", component:ContactComponent}, 
  {path:"cart", component:CartComponent}, 
  {path:"news", component:NewsComponent}, 
  {path:"header", component:HeaderComponent}, 
  {path:"footer", component:FooterComponent}, 
  {path:"", component:BrowserModule}, 
  {path:"app", component:AppComponent}, 
];

@NgModule({

  declarations: [
    // BodyComponent,
    // CheckoutComponent,
    // BodyComponent,
    // HeaderComponent,
    // CartComponent,
    // ContactComponent,
    // ProductDetailComponent,
    // FooterComponent,
    // LoginComponent,
  ],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
