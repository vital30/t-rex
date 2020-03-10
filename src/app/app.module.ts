import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricalDataComponent } from './historical-data/historical-data.component';
import { DatabaseService } from './_services/database/database.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import { MatTableModule } from '@angular/material/table'  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    HomePageComponent,
    DashboardComponent,
    HistoricalDataComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,BrowserAnimationsModule,MatTabsModule,MatTableModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
