import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent{

  Artista: any = {};
  loading: boolean;

  constructor(
    private router: ActivatedRoute,
    private spotify: SpotifyService,
  ) {
    this.router.params
    .subscribe( params => {
      console.info(params['id']);
      this.loading = false;
      this.getArtista(params['id']);
    } )
  }

  getArtista(id: string) {
    this.spotify.getArtista(id)
    .subscribe ( artista => {
      this.Artista = artista;
      console.info(this.Artista);
    })
  }


}
