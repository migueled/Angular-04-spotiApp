import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  loading: boolean = false;
  constructor(private spotify: SpotifyService) {
    //this.loading=false;
  }

  ngOnInit(): void {}

  buscar(termino: string) {
    if (termino.length > 0) {
      this.loading = true;

      this.spotify.getArtistas(termino).subscribe((data: any) => {
        this.artistas = data;
        this.loading = false;
      });
    }
  }
}
