import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization:'Bearer A-BQATNWdAkFvfKioIuQ5MyqhcnYr_X8M6baNqDxlbOwg00nJ9-AGyQD0H9RIIg_J7LM4tjCJHiqlNwa9NQnE',
    });

    return this.http.get(url, { headers });
  }

  constructor(private http: HttpClient) {}

  getNewReleases() {
    return this.getQuery('browse/new-releases')
    .pipe(map((data: any) => {return data.albums.items;}));
  }

  getArtistas(termino: string) {   

    return this.getQuery(`search?q=${termino}&type=artist&limit=10`)
      .pipe(map((data: any) => data.artists.items));
  }

  getArtista(id: string) {   

    return this.getQuery(`artists/${id}`);

  }
  getTopTracks(id: string) {   

    return this.getQuery(`artists/${id}/top-tracks/?market=us`)
    .pipe(map((data: any) => data.tracks));
  }
}0
/* 
 getArtist(termino: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCPqKlJ3Y86GJoFCdbzom052UbSds8hEzjVuGSDTl-6dmtWczjcORP81zhTR5wDZwdGD1tRKJSYanlFWxc',
    });

    return this.http
      .get(
        `https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`,
        { headers }
      )
      .pipe(map((data: any) => data.artists.items));
  }
*/