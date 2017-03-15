import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
//test
import { PageMenuGeneral } from '../pages/MenuGeneral/menuGeneral';
import {FicheContactComponent} from '../pages/ContactFiche/contactFiche';
import {ContactMenuComponent} from '../pages/ContactMenu/contactMenu';
import {RestTestComponent} from '../pages/RestTest/restTest';
import {fbTestComponent} from '../pages/fbTest/fbTest';

import { FacebookService } from 'ng2-facebook-sdk';
import { HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PageMenuGeneral,// test
    FicheContactComponent,// test
    ContactMenuComponent,// test
    RestTestComponent,
    fbTestComponent // test
  ],
  imports: [
    IonicModule.forRoot(MyApp),
     HttpModule// test,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [ // voir ce que c'est que ça 
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PageMenuGeneral,// test
    FicheContactComponent,// test
    ContactMenuComponent,// test
    RestTestComponent,
    fbTestComponent // test
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},  FacebookService]
})
export class AppModule {}
