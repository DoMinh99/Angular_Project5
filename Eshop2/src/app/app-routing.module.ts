import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoryComponent } from './shared/category/category.component';

const routes: Routes = [
  { path:'', component:MainComponent },
  { path:'about', component:AboutComponent },
  { path:'shared', component:SharedComponent },
  { path:'login', component:LoginComponent },
  { path:'product', component:ProductComponent },
  { path:'search', component:SearchComponent },
  { path:'header', component:HeaderComponent },
  { path:'footer', component:FooterComponent },
  { path:'category', component:CategoryComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
