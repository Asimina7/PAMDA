import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient) { }

  url = 'https://api.rawg.io/api/games';

  getData(category: string) {
    const params = new HttpParams().
      set('key', 'b01201d5c4f74aabaa9c7ec243e78444')
      .set('page_size', '40')
      .set('genres', category)
    return this.http.get(this.url, { params: params })
      .pipe(
        retry(1),
        catchError(error => throwError(() => `Something went wrong....${error}`))
      );
  }


}
