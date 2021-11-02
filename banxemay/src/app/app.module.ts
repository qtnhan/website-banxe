import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import {  HttpClientModule } from '@angular/common/http';
import { XemayComponent } from './components/xemay/xemay.component';
import { XetaygaComponent } from './components/xetayga/xetayga.component';
import { XetayconComponent } from './components/xetaycon/xetaycon.component';
import { ProductComponent } from './components/product/product.component';
import { ChitietsanphamComponent } from './components/chitietsanpham/chitietsanpham.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    XemayComponent,
    XetaygaComponent,
    XetayconComponent,
    ProductComponent,
    ChitietsanphamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
