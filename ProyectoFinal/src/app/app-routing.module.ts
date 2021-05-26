import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent} from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NosotrosComponent} from './nosotros/nosotros.component';
import { OfertasComponent } from './ofertas/ofertas.component';
const routes: Routes = [
  {path: 'contacto', component: ContactoComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'ofertas',component:OfertasComponent},
 { path: '**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
