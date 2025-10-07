import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import currenciesJson from '../../json/currencies.json';
import { StringConstants } from '../../global/stringConstants';
import { AppService } from '../app.service';

@Component({
  selector: 'currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.css']
})
export class CurrencyExchangeComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // #region Variables

  readonly historicalDataYearDifference: number = 2;

  filteredCurrenciesDetails: any[] = [];

  exchangeRates: any = {};
  baseCurrencyCode: string = 'INR';

  userAmount: number = 1;
  userCurrencyCode: string = '';
  userCurrencySymbol: string = '';

  convertedAmount: number = 0;
  convertedCurrencyCode: string = 'USD';
  convertedCurrencySymbol: string = '';

  isLoading: boolean = true;

  // #region Graph configurations

  lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Exchange Rate',
        fill: true,
        tension: 0.4,
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63, 81, 181, 0.1)',
        pointBackgroundColor: '#3f51b5',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#3f51b5',
        pointRadius: 0,
        pointHoverRadius: 4,
        borderWidth: 2
      }
    ]
  };

  lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14,
            family: 'Roboto, sans-serif'
          },
          padding: 15,
          usePointStyle: true
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
          family: 'Roboto, sans-serif'
        },
        bodyFont: {
          size: 13,
          family: 'Roboto, sans-serif'
        },
        callbacks: {
          label: (context) => {
            return `Rate: ${context.parsed.y.toFixed(6)}`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          font: {
            family: 'Roboto, sans-serif'
          },
          callback: (value) => Number(value).toFixed(4)
        }
      },
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            family: 'Roboto, sans-serif',
            size: 11
          }
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    }
  };

  lineChartLegend = true;

  // #endregion

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

        this.userCurrencyCode = response.currency ? response.currency : this.baseCurrencyCode;
        this.userCurrencySymbol = this.getCurrencySymbolFromCurrencyCode(this.userCurrencyCode);

        this.convertedCurrencyCode = this.convertedCurrencyCode ? this.convertedCurrencyCode : this.userCurrencyCode;
        this.convertedCurrencySymbol = this.getCurrencySymbolFromCurrencyCode(this.convertedCurrencyCode);

        this.getExchangeRates();
      });
  }

  async getExchangeRates() {
    this.isLoading = true;

    await this.appService.getExchangeRates(this.userCurrencyCode)
      .then((response: any) => {
        this.isLoading = false;

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

    const toGetChartData: boolean = currenciesJson.some(x => x.code.toLowerCase() === this.userCurrencyCode.toLowerCase())
      && currenciesJson.some(x => x.code.toLowerCase() === this.convertedCurrencyCode.toLowerCase())
      && this.userCurrencyCode.toLowerCase() !== this.convertedCurrencyCode.toLowerCase();

    if (toGetChartData) {
      this.loadCurrencyExchangeChart();
    }
    else {
      this.resetCurrencyExchangeChart();
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

  private loadCurrencyExchangeChart() {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setFullYear(endDate.getFullYear() - this.historicalDataYearDifference);

    const start = startDate.toISOString().split('T')[0];
    const end = endDate.toISOString().split('T')[0];

    this.isLoading = true;

    this.appService.getCurrencyExchangeHistoricalData(start, end, this.userCurrencyCode, this.convertedCurrencyCode)
      .then((response: any) => {
        const rates: { date: string; rate: number }[] = [];
        for (const date in response.rates) {
          rates.push({
            date: date,
            rate: response.rates[date][this.convertedCurrencyCode]
          });
        }

        this.lineChartData.labels = rates.map(r => this.formatDate(r.date));
        this.lineChartData.datasets[0].data = rates.map(r => r.rate);
        this.lineChartData.datasets[0].label = `${this.userCurrencyCode} → ${this.convertedCurrencyCode}`;

        this.chart?.update();

        this.isLoading = false;
      })
      .catch((error: any) => {
        this.isLoading = false;
        this.resetCurrencyExchangeChart();
      });
  }

  private formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }

  private resetCurrencyExchangeChart() {
    this.lineChartData.labels = [];
    this.lineChartData.datasets[0].data = [];
    this.lineChartData.datasets[0].label = 'No Data Available';

    this.chart?.update();
  }

  // #endregion
}
