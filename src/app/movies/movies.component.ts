import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie/movie';

@Component({
  selector: 'wjs-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [{
    id: 1,
    title: 'Subiektywny przegląd sytuacji na froncie - meet.js Poznań',
    description: '"Nowy dzień, nowy framework". Jak żyć?',
    url: 'https://www.youtube.com/embed/Aybh_2pIi2I'
  }, {
    id: 2,
    title: 'Mateusz Chrzonstowski - Subiektywny przegląd front-endów |#49 IT Akademia j-labs',
    description: '"Nowy dzień, nowy framework". Słyszeliście o tym? Mateusz jest jedną z osób śledzących front-endy i chce podzielić się z Wami swoimi obserwacjami.',
    url: 'https://www.youtube.com/embed/KDTP9Dfkh1Q'
  }]
  constructor() {}
  ngOnInit() {}
}