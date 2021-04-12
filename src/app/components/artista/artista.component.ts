import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artista',
    templateUrl: './artista.component.html',
    styleUrls: ['./artista.component.scss'],
})
export class ArtistaComponent implements OnInit {
    loading : boolean = false;
    artista : any     = {};
    topTracks : any[] = [];

    constructor( private router : ActivatedRoute,
                 private spotify : SpotifyService) {
        this.router.params.subscribe( ( params ) => {
            this.getArtista(params['id']);
            this.getTopTracks(params['id']);
        });
    }

    ngOnInit(): void {}

    getArtista( id : string ) {
        this.loading = true;
        
        this.spotify.getArtista(id).subscribe( ( data ) => {
            this.artista = data;
            this.loading = false;
        });
    }

    getTopTracks( id : string ){
        this.spotify.getTopTracks(id).subscribe( data => {
            this.topTracks = data;
        });
    }

}
