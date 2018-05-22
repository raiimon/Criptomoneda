import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataProvider {

  result:any;

  constructor(public http: HttpClient) {

  }

  getCoins(coins) {
    let coinlist = '';

    coinlist = coins.join();

    return this.http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms="+coinlist+"&tsyms=USD")
      .map(result => this.result = result);
  }

  getCoin(coin) {
    return this.http.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms="+coin+"&tsyms=USD")
      .map(result => this.result = result);
  }

  getChart(coin) {
    return this.http.get("https://min-api.cryptocompare.com/data/histoday?fsym="+coin+"&tsym=USD&limit=30&aggregate=1")
    .map(result => this.result = result);
  }

  allCoins() {
    return this.http.get("https://min-api.cryptocompare.com/data/all/coinlist")
      .map(result => this.result = result);
  }

  /// En desarollo ///
  BTC(){
    return this.http.get("https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=EUR")
      .map(result => this.result = result);

  }

  ETH(){
    return this.http.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=EUR")
      .map(result => this.result = result);
  }

  LTC(){
    return this.http.get("https://min-api.cryptocompare.com/data/price?fsym=LTC&tsyms=EUR")
      .map(result => this.result = result);
  }

  XRP(){
    return this.http.get("https://min-api.cryptocompare.com/data/price?fsym=XRP&tsyms=EUR")
      .map(result => this.result = result);

  }

}
