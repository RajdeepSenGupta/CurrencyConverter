import { Component, OnInit } from '@angular/core';

import currenciesJson from '../../json/currencies.json';
import { StringConstants } from '../../global/stringConstants';
import { AppService } from '../app.service';

@Component({
  selector: 'currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css']
})
export class CurrencyExchangeComponent implements OnInit {
  // #region Variables

  filteredCurrenciesDetails: any[] = [];

  exchangeRates: any = {};
  baseCurrencyCode: string = 'INR';

  userAmount: number = 1;
  userCurrencyCode: string = '';
  userCurrencySymbol: string = '';

  convertedAmount: number = 0;
  convertedCurrencyCode: string = '';
  convertedCurrencySymbol: string = '';

  // #endregion

  // #region Constructor

  constructor(private readonly stringConstants: StringConstants, private readonly appService: AppService) {
    this.filteredCurrenciesDetails = [...currenciesJson];
  }

  // #endregion

  // #region Public Methods

  ngOnInit() {
    this.getUserDetailsFromIP();
  }

  async getUserDetailsFromIP() {
    await this.appService.getUserCurrencyCodeFromIP()
      .then((response: any) => {
        this.userCurrencyCode = response.currency ? response.currency : this.baseCurrencyCode;
        this.userCurrencySymbol = this.getCurrencySymbolFromCurrencyCode(this.userCurrencyCode);

        this.convertedCurrencyCode = this.userCurrencyCode;
        this.convertedCurrencySymbol = this.userCurrencySymbol;

        this.getExchangeRates();
      })
  }

  async getExchangeRates() {
    await this.appService.getExchangeRates(this.userCurrencyCode)
      .then((response: any) => {
        this.exchangeRates = response.rates;

        this.calculateExchangedValue(this.userCurrencyCode, false);
      });
  }

  async calculateExchangedValue(selectionValue: string, isUserCurrencyChanged: boolean) {
    this.filterAutoCompleteOptions(selectionValue);

    if (isUserCurrencyChanged && currenciesJson.some(x => x.code.toLowerCase() === this.userCurrencyCode.toLowerCase())) {
      await this.getExchangeRates();
    }
    else {
      let exchangeRate: number = this.exchangeRates[this.convertedCurrencyCode];
      this.convertedAmount = this.userAmount * exchangeRate;
      this.userCurrencySymbol = this.getCurrencySymbolFromCurrencyCode(this.userCurrencyCode);
      this.convertedCurrencySymbol = this.getCurrencySymbolFromCurrencyCode(this.convertedCurrencyCode);
    }
  }

  swapCurrencies() {
    let tempCurrencyCode: string = this.userCurrencyCode;
    this.userCurrencyCode = this.convertedCurrencyCode;
    this.convertedCurrencyCode = tempCurrencyCode;

    this.calculateExchangedValue('', true);
  }

  currencyAutoCompleteDisplay(currencyCode: string): string {
    let currencyDetails: any = currenciesJson.filter(x => x.code === currencyCode)[0];
    return currencyDetails ? `${currencyDetails.code} - ${currencyDetails.name} (${currencyDetails.symbol})` : currencyCode;
  }

  // #endregion

  // #region Private Methods

  private getCurrencySymbolFromCurrencyCode(currencyCode: string): string {
    let currencyDetails: any = currenciesJson.filter(x => x.code === currencyCode)[0];

    return currencyDetails ? currencyDetails.symbol : currencyCode;
  }

  private filterAutoCompleteOptions(selectionValue: string) {
    this.filteredCurrenciesDetails = [...currenciesJson];

    if (selectionValue) {
      this.filteredCurrenciesDetails = this.filteredCurrenciesDetails.filter(x => x.code.toLowerCase().includes(selectionValue.toLowerCase()) || x.name.toLowerCase().includes(selectionValue.toLowerCase()));
    }
  }

  // #endregion
}
