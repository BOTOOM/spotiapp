import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQAtvoeX4nyDNnnYdoxukV3fTR6oKi-veyQ_8EILXah1y8YRVFfIjxmT1f1865EwuA8TzLXQ2wdiMJfVDV0';

  constructor(
    private http: HttpClient,
  ) {
    console.info('Spotify Service Listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`https://api.spotify.com/v1/browse/new-releases?offset=5&limit=20`, { headers });

  }

  getArtista( termino:string ) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers });
  }
}
