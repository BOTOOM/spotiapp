import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  statusError: number;

  constructor(
    private spotify: SpotifyService,
  ) {
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
    .subscribe(data => {
      console.info(data);
      this.nuevasCanciones = <any>data;
      this.loading = false;
    }, (error_service) => {
      this.loading = false;
      this.error=true;
      console.info(error_service['error']['error']);
      this.mensajeError = error_service['error']['error']['message']
      this.statusError = error_service['error']['error']['status']
    });
   }

  ngOnInit() {
  }

}
