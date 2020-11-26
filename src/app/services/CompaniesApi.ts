import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { defaultResponseHandler, extendObj, getRequestOptions } from './apiUtils';

@Injectable()
export class CompaniesApi {

  protected basePath = 'https://izarra.co/api';

  constructor(protected http: HttpClient) { }
  public companiesGet(search?: string): Observable<{}> {
    return this.companiesGetWithHttpInfo(search)
      .pipe(map(defaultResponseHandler));
  }

  public companyGet(id: string, extraHttpRequestParams?: any): Observable<{}> {
    return this.companyGetWithHttpInfo(id, extraHttpRequestParams)
      .pipe(map(defaultResponseHandler));
  }

  public join(data): Observable<{}> {
    return this.joinWithHttpInfo(data)
      .pipe(map(defaultResponseHandler));
  }

  public uploadLogo(form: FormData) {
    return this.uploadWithHttpInfo(form)
      .pipe(map(defaultResponseHandler));
  }

  private uploadWithHttpInfo(data): any {
    const path = `${this.basePath}/company/logo`;

    let options = getRequestOptions();
    options = extendObj(options, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });

    return this.http.post(path, data, options);
  }

  private joinWithHttpInfo(data): any {
    const path = `${this.basePath}/company`;

    const options = getRequestOptions();

    return this.http.post(path, data, options);
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