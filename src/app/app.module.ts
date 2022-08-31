import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FibreComponent } from './fibre/fibre.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HomeHeroComponent } from './home/home-hero/home-hero.component';
import { HomeSec1Component } from './home/home-sec1/home-sec1.component';
import { HomeSec2Component } from './home/home-sec2/home-sec2.component';
import { HomeSec3Component } from './home/home-sec3/home-sec3.component';
import { HomeSec4Component } from './home/home-sec4/home-sec4.component';
import { HomeSec5Component } from './home/home-sec5/home-sec5.component';
import { HomeSec6Component } from './home/home-sec6/home-sec6.component';
import { HomeSec7Component } from './home/home-sec7/home-sec7.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConnectComponent } from './fibre/connect/connect.component';
import { FibrecomponentComponent } from './fibre/fibrecomponent/fibrecomponent.component';
import { HomefibreComponent } from './fibre/homefibre/homefibre.component';
import { SecureComponent } from './fibre/secure/secure.component';
import { LteComponent } from './fibre/lte/lte.component';
import { EntertainmentComponent } from './fibre/entertainment/entertainment.component';
import { CctvComponent } from './fibre/cctv/cctv.component';
import { IotComponent } from './fibre/iot/iot.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const appRoutes : Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'fibre', component: FibreComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'getconnected', component: ConnectComponent },
  { path: 'homefibre', component: HomefibreComponent },
  { path: 'securenet', component: SecureComponent },
  { path: 'lte', component: LteComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'homecctv', component: CctvComponent },
  { path: 'iot', component: IotComponent }
  

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    FibreComponent,
    ContactComponent,
    HomeComponent,
    HomeHeroComponent,
    HomeSec1Component,
    HomeSec2Component,
    HomeSec3Component,
    HomeSec4Component,
    HomeSec5Component,
    HomeSec6Component,
    HomeSec7Component,
    FooterComponent,
    LoginComponent,
    ConnectComponent,
    FibrecomponentComponent,
    HomefibreComponent,
    SecureComponent,
    LteComponent,
    EntertainmentComponent,
    CctvComponent,
    IotComponent,
 
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
