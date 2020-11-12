import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { defaultResponseHandler, extendObj, getRequestOptions } from './apiUtils';

@Injectable()
export class CompaniesApi {

  protected basePath = 'http://localhost:3005';

  constructor(protected http: HttpClient) { }
  public companiesGet(extraHttpRequestParams?: any): Observable<{}> {
    return this.companiesGetWithHttpInfo(extraHttpRequestParams)
      .pipe(map(defaultResponseHandler));
  }

  public companyGet(id: string, extraHttpRequestParams?: any): Observable<{}> {
    return this.companyGetWithHttpInfo(id, extraHttpRequestParams)
      .pipe(map(defaultResponseHandler));
  }
  public companiesGetWithHttpInfo(extraHttpRequestParams?: any): any {

    const path = `${this.basePath}/company`;

    let options = getRequestOptions();

    if (extraHttpRequestParams) {
      options = extendObj(options, extraHttpRequestParams);
    }

    return this.http.get(path, options);
  }

  public companyGetWithHttpInfo(id: string, extraHttpRequestParams?: any): any {

    const path = `${this.basePath}/company/${id}`;

    let options = getRequestOptions();

    if (extraHttpRequestParams) {
      options = extendObj(options, extraHttpRequestParams);
    }

    return this.http.get(path, options);
  }
}