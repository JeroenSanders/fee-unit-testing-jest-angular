import { Observable, of } from 'rxjs';

export class HttpClientStub {

  public get<T>(searchUrl: string, searchParam: any): Observable<T> {
    return of(null);
  }

  public put<T>(searchUrl: string, obj: T): Observable<T> {
    return of(null);
  }
}
