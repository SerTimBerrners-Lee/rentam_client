import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LendingComponent } from './lending/lending.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { HeaderComponent } from './header/header.component';
import { PreHeaderComponent } from './pre-header/pre-header.component';
import { SearchComponent } from './search/search.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogModalComponent } from './catalog-modal/catalog-modal.component';
import { InformPageComponent } from './inform-page/inform-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StartRenterComponent } from './start-renter/start-renter.component';
import { SearchModalComponent } from './search-modal/search-modal.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CarderStandartComponent } from './carder-standart/carder-standart.component';
@NgModule({
  declarations: [
    AppComponent,
    LendingComponent,
    AuthModalComponent,
    HeaderComponent,
    PreHeaderComponent,
    SearchComponent,
    CatalogComponent,
    CatalogModalComponent,
    InformPageComponent,
    NotFoundComponent,
    StartRenterComponent,
    SearchModalComponent,
    SpinnerComponent,
    CarderStandartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
