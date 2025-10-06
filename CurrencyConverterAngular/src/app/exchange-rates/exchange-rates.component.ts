import { Component, OnInit } from '@angular/core';

import currenciesJson from '../../json/currencies.json';
import { StringConstants } from '../../global/stringConstants';
import { AppService } from '../app.service';

@Component({
  selector: 'exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {
  // #region Variables

  filteredCurrenciesDetails: any[] = [];
  displayedColumns: string[] = ['country', 'flag', 'code', 'name', 'symbol', 'rate'];
  alphabetsList: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  selectedAlphabet: string = '';

  exchangeRates: any = {};
  exchangeRateTableDataSource: any[] = [];

  amount: number = 1;
  currencyCode: string = 'INR';
  currencySymbol: string = '';

  isLoading: boolean = true;

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
    this.isLoading = true;

    await this.appService.getUserCurrencyCodeFromIP()
      .then((response: any) => {
        this.isLoading = false;

        this.currencyCode = response.currency ? response.currency : this.currencyCode;
        this.currencySymbol = this.getCurrencySymbolFromCurrencyCode(this.currencyCode);

        this.getExchangeValuesList('');
      })
  }

  async getExchangeValuesList(selectionValue: string) {
    this.filterAutoCompleteOptions(selectionValue);

    if (currenciesJson.some(x => x.code.toLowerCase() === this.currencyCode.toLowerCase())) {
      this.isLoading = true;

      await this.appService.getExchangeRates(this.currencyCode)
        .then((response: any) => {
          this.isLoading = false;

          this.exchangeRates = response.rates;

          if (this.selectedAlphabet) {
            this.filterByAlphabet(this.selectedAlphabet);
          }
          else {
            this.createExchangeRateTableData();
          }
        });
    }
  }

  currencyAutoCompleteDisplay(currencyCode: string): string {
    let currencyDetails: any = currenciesJson.filter(x => x.code === currencyCode)[0];
    return currencyDetails ? `${currencyDetails.code} - ${currencyDetails.name} (${currencyDetails.symbol})` : currencyCode;
  }

  filterByAlphabet(alphabet: string) {
    this.createExchangeRateTableData();

    if (alphabet) {
      this.selectedAlphabet = alphabet;
      this.exchangeRateTableDataSource = this.exchangeRateTableDataSource.filter(x => x.country.toLowerCase().startsWith(alphabet.toLowerCase()));
    }
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

  private createExchangeRateTableData() {
    // Convert Object to an Array of Objects
    // e.g. { A: 1, B: 2, ... } => [{'code': 'A', 'rate': 1}, {'code': 'B', 'rate': 2}]
    let exchangeRatesArray = Object.entries(this.exchangeRates).map(([code, rate]) => ({ code, rate }));

    // List 1 + List 2 => List 3 depending upon a common value
    // [name, code, symbol] + [code, rate] => [name, code, symbol, rate] where the code is the common value
    this.exchangeRateTableDataSource = currenciesJson.map(currency => {
      const match = exchangeRatesArray.find(x => x.code === currency.code);
      return {
        ...currency,
        rate: match ? match.rate : 0
      };
    });

    // Sort by country name
    this.exchangeRateTableDataSource.sort((a, b) => a.country.localeCompare(b.country));
  }

  // #endregion
}
