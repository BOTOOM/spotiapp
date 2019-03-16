import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  loading: boolean;

  constructor(
    private spotify: SpotifyService,
  ) {
    // this.loading = false;
  }

  ngOnInit() {
  }

  buscar( termino:string ) {
    this.loading = true;
    console.info(termino);
    this.spotify.getArtista(termino)
    .subscribe(data => {
      this.artistas = <any>data;
      console.info(this.artistas);
      this.loading = false;
    });
  }

}
