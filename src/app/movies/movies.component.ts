import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';
import { MoviesService } from './movies.service';

@Component({
  selector: 'wjs-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchTitle = '';
  private movies: Movie[] = [];

  constructor(private service: MoviesService) { }

  async ngOnInit() {
    this.movies = await this.service.readMovies();
  }

  get filteredMovies() {
    return this.movies.filter(m  => m.title.toLowerCase().includes(this.searchTitle.toLowerCase()));
  }
}