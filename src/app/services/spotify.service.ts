import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQCXidKukTchxA7-gDgj73FICUpD9LhWv6jCxOy1bYlamp8HKscVTC8mG2v7pJGjTzLgBNwfDkwNtp_yKjc';

  constructor(
    private http: HttpClient,
  ) {
    console.info('Spotify Service Listo');
  }

  getQuery( query: string ) {

    const version = `v1`
    const url = `https://api.spotify.com/${version}/${query}`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(url, {headers});

  }

  getNewReleases() {

    return this.getQuery(`browse/new-releases?offset=0&limit=20`)
    .pipe( map( data => {
      return data['albums']['items'];
    } ) );

  }

  getArtista( termino:string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map( data => {
      return data['artists']['items'];
    } ) ) ;
  }
}
