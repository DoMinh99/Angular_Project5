import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { SeachComponent } from './seach/seach.component';
import { SearchComponent } from './search/search.component';
import { FoodterComponent } from './shared/foodter/foodter.component';
import { HeaderComponent } from './shared/header/header.component';
import { CategoryComponent } from './shared/category/category.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SharedComponent,
    LoginComponent,
    AboutComponent,
    ProductComponent,
    SeachComponent,
    SearchComponent,
    FoodterComponent,
    HeaderComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
