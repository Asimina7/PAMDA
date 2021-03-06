import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
import { Login } from '../sign-in/sign-in.model';
import { Register } from '../register-form/register.model';
import { Payment } from '../register-form/payment.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  url = 'https://api.rawg.io/api/games';

  getData(category: string) {
    const params = new HttpParams().
      set('key', 'c4f43e7594d94d62a33d633e020b2641')
      .set('page_size', '40')
      .set('genres', category)
    return this.http.get(this.url, { params: params })
      .pipe(
        retry(1),
        catchError(error => throwError(() => `Something went wrong....${error}`))
      );
  }

  getDataFiltered(ordering: string) {
    const params = new HttpParams().
      set('key', 'c9bea8cc4388434eb3c1dd58fc5a5306')
      .set('page_size', '40')
      .set('ordering', ordering)
    return this.http.get(this.url, { params: params })
      .pipe(
        retry(1),
        catchError(error => throwError(() => `Something went wrong....${error}`))
      );
  }

  getAllGames() {
    const params = new HttpParams().
      set('key', 'c9bea8cc4388434eb3c1dd58fc5a5306')
      .set('page_size', '40')
    return this.http.get(this.url, { params: params })
      .pipe(
        retry(1),
        catchError(error => throwError(() => `Something went wrong....${error}`))
      );
  }





  //urlFakePost = 'https://jsonplaceholder.typicode.com/posts'
  urlFakePost = 'https://reqres.in/api/users'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'crossDomain': 'true'
    })
  }

  postData(login: Login) {
    const data = login;

    return this.http.post(this.urlFakePost, JSON.stringify(data), this.httpOptions).pipe(

      retry(1),

      catchError(error => throwError(() => `Wrong...${error}`))

    )
  }

  //account
  postDataReg(register: Register) {
    const data = register;

    return this.http.post(this.urlFakePost, JSON.stringify(data), this.httpOptions).pipe(

      retry(1),

      catchError(error => throwError(() => `Wrong...${error}`))

    )
  }

  //payment
  postDataPay(payment: Payment) {
    const data = payment;

    return this.http.post(this.urlFakePost, JSON.stringify(data), this.httpOptions).pipe(

      retry(1),

      catchError(error => throwError(() => `Wrong...${error}`))

    )
  }


}
