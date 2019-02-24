import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'wjs-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private service: MoviesService) { }

  async ngOnInit() {
    this.movies = await this.service.readMovies();
  }
}