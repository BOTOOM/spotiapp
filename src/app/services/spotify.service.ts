import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token = 'BQBF6OAA-SS_tChuCgLAUC6pcZmPy8EOa4mWVTFZBWPfnHbdA5gDxcfm9YsJLeFM2tgiCKpVooZ8CU_ct5c';

  constructor(
    private http: HttpClient,
  ) {
    console.info('Spotify Service Listo');
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=20`, { headers });

  }
}
