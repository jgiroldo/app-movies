import { RateModel } from './rate';

export class MovieModel {
  title: String;
  year: String;
  rated: String;
  released: String;
  runtime: String;
  genre: String;
  director: String;
  writer: String;
  actors: String;
  plot: String;
  language: String;
  country: String;
  awards: String;
  poster: String;
  ratings: Array<RateModel>;
  metascore: String;
  imdbRating: String;
  imdbVotes: String;
  imdbID: String;
  type: String;
  dvd: String;
  boxOffice: String;
  production: String;
  website: String;
  response: String;

  constructor(mv: any) {
    this.title = mv.Title;
    this.year = mv.Year;
    this.rated = mv.Rated;
    this.released = mv.Released;
    this.runtime = mv.Runtime;
    this.genre = mv.Genre;
    this.director = mv.Director;
    this.writer = mv.Writer;
    this.actors = mv.Actors;
    this.plot = mv.Plot;
    this.language = mv.Language;
    this.country = mv.Country;
    this.awards = mv.Awards;
    this.poster = mv.Poster;
    this.ratings = mv.Ratings;
    this.metascore = mv.Title;
    this.imdbRating = mv.imdbRating;
    this.imdbVotes = mv.imdbVotes;
    this.imdbID = mv.imdbID;
    this.type = mv.Type;
    this.dvd = mv.DVD;
    this.boxOffice = mv.BoxOffice;
    this.production = mv.Production;
    this.website = mv.Website;
    this.response = mv.Response;
  }
}
