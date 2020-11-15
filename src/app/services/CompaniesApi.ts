import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { defaultResponseHandler, extendObj, getRequestOptions } from './apiUtils';

@Injectable()
export class CompaniesApi {

  protected basePath = 'http://izarra.co/api';

  constructor(protected http: HttpClient) { }
  public companiesGet(search?: string): Observable<{}> {
    return this.companiesGetWithHttpInfo(search)
      .pipe(map(defaultResponseHandler));
  }

  public companyGet(id: string, extraHttpRequestParams?: any): Observable<{}> {
    return this.companyGetWithHttpInfo(id, extraHttpRequestParams)
      .pipe(map(defaultResponseHandler));
  }
  private companiesGetWithHttpInfo(search?: string): any {

    const path = `${this.basePath}/company` + (search ? `?search=${search}` : '');

    const options = getRequestOptions();

    return this.http.get(path, options);
  }

  private companyGetWithHttpInfo(id: string, extraHttpRequestParams?: any): any {

    const path = `${this.basePath}/company/${id}`;

    let options = getRequestOptions();

    if (extraHttpRequestParams) {
      options = extendObj(options, extraHttpRequestParams);
    }

    return this.http.get(path, options);
  }
}