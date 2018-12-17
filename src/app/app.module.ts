import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AldalelMapPage } from '../pages/aldalel-map/aldalel-map';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CallNumber } from '@ionic-native/call-number';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsPage } from '../pages/settings/settings';
import { AldalelPage } from '../pages/aldalel/aldalel';
import { AldalelListPage } from '../pages/aldalel-list/aldalel-list';
import { AldalelInfoPage } from '../pages/aldalel-info/aldalel-info';
import { MarkitingPage } from '../pages/markiting/markiting';
import { PhonesPage } from '../pages/phones/phones';
import { JobListPage } from '../pages/job-list/job-list';
import { CarrerPage } from '../pages/carrer/carrer';
import { CarrerInfoPage } from '../pages/carrer-info/carrer-info';
import {JobsPage} from '../pages/jobs/jobs';
import {EmployeesPage} from '../pages/employees/employees';

import { CrudProvider } from '../providers/crud/crud';

import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http'; 

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SettingsPage,
    AldalelPage,
    AldalelListPage,
    AldalelInfoPage,
    MarkitingPage,
    PhonesPage,
    JobListPage,
    TabsPage,
    CarrerPage,
    CarrerInfoPage,
    JobsPage,
    EmployeesPage,
    AldalelMapPage ,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    SettingsPage,
    AldalelPage,
    AldalelListPage,
    AldalelInfoPage,
    MarkitingPage,
    PhonesPage,
    JobListPage,
    TabsPage,
    CarrerPage,
    CarrerInfoPage,
    JobsPage,
    EmployeesPage,
    AldalelMapPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CrudProvider,
    CallNumber
  ]
})
export class AppModule {}
