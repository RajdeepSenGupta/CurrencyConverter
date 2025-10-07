import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { StringConstants } from '../global/stringConstants';

@Injectable()
export class AppService {

  // #region Constructor

  constructor(private readonly stringConstants: StringConstants, private readonly httpClient: HttpClient) { }

  // #endregion

  // #region Methods

  async getExchangeRates(baseCurrencyCode: string): Promise<any> {
    return firstValueFrom(this.httpClient.get(this.stringConstants.exchangeRateApi + baseCurrencyCode));
  }

  async getUserCurrencyCodeFromIP(): Promise<any> {
    return firstValueFrom(this.httpClient.get(this.stringConstants.userDetailsFromIPApi));
  }

  async getCurrencyExchangeHistoricalData(start: string, end: string, userCurrency: string, convertToCurrency: string): Promise<any> {
    const formattedApi = this.stringConstants.currencyExchangeHistoricalData + `${start}..${end}?from=${userCurrency}&to=${convertToCurrency}`;
    return firstValueFrom(this.httpClient.get(formattedApi));
  }

  // #endregion
}
