import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQA-RxSwR9-lbYQXZFFqPWFTnLKlKTPtBrOpfVanlKXllvzvJMUftgnJENcxqo4CE8E4aFFKXsDUxtsgvis';

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

  getArtistas( termino:string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map( data => {
      return data['artists']['items'];
    } ) ) ;
  }

  getArtista( id:string ) {

    return this.getQuery(`artists/${ id }`);
    // .pipe( map( data => {
    //   return data['artists']['items'];
    // } ) )
     // ;
  }

  getTopTracks( id:string ) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
    .pipe( map( data => {
      return data['tracks'];
    } ) );
  }
}
