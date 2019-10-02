import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MiservicioPrincipalService {

  private urlBase = 'http://localhost/lab4/';

  constructor( public http: HttpClient ) {}


  public HttpGetAll(metodo: string): Observable<any> {
    return this.http.get( this.urlBase + metodo )
    .pipe( res => res );
  }


  public DeleteHttp(url: string, id: number) {
    console.log(this.urlBase + url + id);
    return this.http.delete(this.urlBase + url + id)
    .pipe( res => res );
    // .toPromise().catch(this.ErrorHandler);
  }

  public PostHttp(url: string, object: any) {
    this.http.post(this.urlBase + url, object, httpOptions);
  }



}
