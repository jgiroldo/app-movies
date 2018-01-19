import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { environment } from '../environments/environment';
import { Headers, Jsonp, RequestOptions } from '@angular/http';
import * as moment from 'moment';

@Injectable()
export class HttpServiceClient {

  constructor(
    private http: HttpClient
  ) {
  }

  private endPointApi() {
    return environment.apiUrl;
  }

  getHeaders() {
    const headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin', '*');
    return headers;
  }

  handleResponse(observable: Observable<any>) {
    let result = null;
    result = observable.catch((error) => {
      return Observable.throw(error);
    }).map(res =>
      res
      ).finally(() => {

      });
    return result;
  }

  doGet(path?: string, filterParams?: any, sendKey?: boolean) {
    const url = path ? this.endPointApi() + path : this.endPointApi();
    const key = {
      apikey: environment.apiKey
    };
    if (sendKey) {
      filterParams = Object.assign(filterParams, key);
    }

    if (filterParams) {
      return this.handleResponse(this.http.get(url, { headers: this.getHeaders(), params: filterParams }));
    } else {
      return this.handleResponse(this.http.get(url, { headers: this.getHeaders() }));
    }
  }

  doPost(path: string, body: any, loader?: boolean, filterParams?: any) {
    const url = this.endPointApi() + path;
    return this.handleResponse(this.http.post(url, body, { headers: this.getHeaders() }));
  }

  doPut(path: string, body: any, loader?: boolean, filterParams?: any) {
    const url = this.endPointApi() + path;
    return this.handleResponse(this.http.put(url, body, { headers: this.getHeaders() }));
  }

  doDelete(path: string, id: number, loader?: boolean, filterParams?: any) {
    const url = this.endPointApi() + path + '/' + id;
    if (loader) {
    }
    return this.handleResponse(this.http.delete(url, { headers: this.getHeaders(), responseType: 'text' }));
  }

  // Control Locale DatePicker
  returnLocaleDatePicker() {
    const pt_br_locale_config = {
      firstDayOfWeek: 0,
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago',
        'Set', 'Out', 'Nov', 'Dez']
    };
    return pt_br_locale_config;
  }

  teste() {
    return this.doGet('api/value');
  }
}
