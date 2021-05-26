import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PlatilloService } from './shared/platillo.service';
import { FooterComponent } from './footer/footer.component';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { OfertasComponent } from './ofertas/ofertas.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NosotrosComponent,
    LoginComponent,
    HomeComponent,
    ContactoComponent,
    FooterComponent,
    OfertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

 
  ],
  providers: [
    PlatilloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
