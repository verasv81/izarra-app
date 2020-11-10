import { HttpHeaders, HttpResponse } from '@angular/common/http';

export function getRequestOptions(): any {

  return {
    observe: 'response',
    withCredentials: false,
    headers: new HttpHeaders(),
  };
}

export function getRequestBody(body) {

  return body === null ? '' : JSON.stringify(body);
}

export function extendObj<T1, T2>(objA: T1, objB: T2) {

  for (const key in objB) {
    if (objB.hasOwnProperty(key)) {
      (objA as any)[key] = (objB as any)[key];
    }
  }

  return objA;
}

export function defaultResponseHandler(response: HttpResponse<any>) {

  if (response.status === 204) {
    return undefined;
  } else {
    return response.body || {};
  }
}