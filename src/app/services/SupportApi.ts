import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { defaultResponseHandler, extendObj, getRequestOptions, getRequestBody } from './apiUtils';

@Injectable()
export class SupportApi {

  protected basePath = 'https://izarra.co/api';

  constructor(protected http: HttpClient) { }

  public sendEmail(data: EmailData, extraHttpRequestParams?: any): Observable<{}> {
    return this.sendEmailWithHttpInfo(data, extraHttpRequestParams)
      .pipe(map(defaultResponseHandler));
  }

  public sendEmailWithHttpInfo(data: EmailData, extraHttpRequestParams?: any): any {
    const path = `${this.basePath}/support/email`;

    let options = getRequestOptions();

    if (extraHttpRequestParams) {
      options = extendObj(options, extraHttpRequestParams);
    }

    return this.http.post(path, data, options);
  }
}

export type EmailData = {
  name: string;
  text: string;
  from: string;
};
