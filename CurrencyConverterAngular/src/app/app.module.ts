import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { StringConstants } from '../global/stringConstants';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyExchangeComponent,
    ExchangeRatesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,

    AppRoutingModule
  ],
  providers: [StringConstants, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
