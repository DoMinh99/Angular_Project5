import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoryComponent } from './shared/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { catchError, retry } from 'rxjs/internal/operators';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SharedComponent,
    LoginComponent,
    ProductComponent,
    SearchComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    MainComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
