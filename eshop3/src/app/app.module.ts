import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './shared/product-detail/product-detail.component';
import { NewsComponent } from './news/news.component';
import { CategoryComponent } from './shared/category/category.component';
import { ItemListComponent } from './shared/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SearchComponent,
    ProductDetailComponent,
    NewsComponent,
    CategoryComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
