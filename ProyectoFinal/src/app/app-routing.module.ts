import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent} from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NosotrosComponent} from './nosotros/nosotros.component';
import {AdmComponent} from './adm/adm.component';
const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'adm',component:AdmComponent},
 { path: '**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
