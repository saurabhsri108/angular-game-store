import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
import { SearchComponent } from './components/search/search.component';
import { MaterialModule } from './module/material/material.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LogoComponent } from './components/logo/logo.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
	declarations: [AppComponent, SearchComponent, NavigationComponent, LogoComponent, SignUpComponent, LoginComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule, HttpClientModule, GaugeModule.forRoot(), MaterialModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
