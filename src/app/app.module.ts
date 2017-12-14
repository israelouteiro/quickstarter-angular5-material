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

import 'hammerjs';

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
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


