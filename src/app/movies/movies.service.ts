import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Movie } from '../movie/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  readMovies(): Promise<Movie[]> {
    return this.http.get<Movie[]>(environment.moviesUrl).toPromise();
  }
}