import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  @Input() items: any[] = [];

  constructor() { }

  verArtista( item: any ) {
    let artistaId;
    if (item['type'] === 'artist') {
      artistaId = item['id'];
    } else {
      item['artist'][0]['id'];
    }
  }

}
