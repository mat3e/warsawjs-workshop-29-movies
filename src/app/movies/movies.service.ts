import { Injectable } from '@angular/core';
import { Movie } from '../movie/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  readMovies(): Promise<Movie[]> {
    return Promise.resolve([{
      id: 1,
      title: 'Subiektywny przegląd sytuacji na froncie - meet.js Poznań',
      description: '"Nowy dzień, nowy framework". Jak żyć?',
      url: 'https://www.youtube.com/embed/Aybh_2pIi2I'
    }, {
      id: 2,
      title: 'Mateusz Chrzonstowski - Subiektywny przegląd front-endów |#49 IT Akademia j-labs',
      description: '"Nowy dzień, nowy framework". Słyszeliście o tym? Mateusz jest jedną z osób śledzących front-endy i chce podzielić się z Wami swoimi obserwacjami.',
      url: 'https://www.youtube.com/embed/KDTP9Dfkh1Q'
    }, {
      id: 3,
      title: 'Lessons from writing my own Angular utility lib',
      description: `I had a dream. 
        I wanted to create a popular open-source solution on top of Angular 2+`,
      url: 'https://www.youtube.com/embed/AKZ_GShIg48'
    }])
  }
}