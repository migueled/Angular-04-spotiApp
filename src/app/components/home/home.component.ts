import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {
    //paises:any[]=[];

    nuevasCanciones : any[] = [];
    loading : boolean;
    error : boolean;
    mensajeError : string;
    
    constructor(/*private http:HttpClient*/ private spotify : SpotifyService ) {
    /*this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe((data:any)=>{
      console.log(data);
      this.paises=data;
    })
  */
        this.loading = true;
        this.error = false;
        this.spotify.getNewReleases().subscribe(( data : any ) => {
            this.nuevasCanciones = data;
            this.loading = false;
        },
        ( errorServicio ) => {
            this.error = true;
            this.loading = false;
            this.mensajeError = errorServicio.error.error.message;
        });
    }

    ngOnInit(): void {}
}
