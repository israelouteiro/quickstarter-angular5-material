import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from '../pages/home/home';
import { NotfoundComponent } from '../pages/notfound/notfound';
import { PreviewComponent } from '../pages/preview/preview';

/* Providers */
import { ApiService } from '../services/api/api';
import { Utils } from '../libs/utils/utils';
import { Themes } from '../libs/themes/themes';


/* Dialogs */
import { DialogAlert } from '../components/dialog_alert/dialog_alert'
import { DialogConfirm } from '../components/dialog_confirm/dialog_confirm'

/* Includes */
import { Footer } from '../pages/includes/footer/footer'
import { Header } from '../pages/includes/header/header'
import { SideMenu } from '../pages/includes/side_menu/side_menu'

import 'hammerjs';

import { MAT_DATE_LOCALE } from '@angular/material';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'preview/:uid', component: PreviewComponent },
  { path: '**', component: NotfoundComponent }
];

export const Routing = RouterModule.forRoot(appRoutes, { useHash: true });

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreviewComponent,
    NotfoundComponent,

    DialogAlert,
    DialogConfirm,

    Footer,
    Header,
    SideMenu
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents:[
    DialogAlert,
    DialogConfirm
  ],
  providers: [
    ApiService,
    Utils,
    Themes,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


