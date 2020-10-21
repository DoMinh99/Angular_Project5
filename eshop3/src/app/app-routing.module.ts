import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { SharedComponent } from './shared/shared.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  { path:'', component:MainComponent },
  { path:'shared', component:SharedComponent },
  { path:'login', component:LoginComponent },
  { path:'search', component:SearchComponent },
  { path:'header', component:HeaderComponent },
  { path:'footer', component:FooterComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
