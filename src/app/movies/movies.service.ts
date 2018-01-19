import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MovieModel } from './models/movie';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { HttpServiceClient } from '../http.service';


@Injectable()
export class MoviesService {

  constructor(private httpService: HttpServiceClient) { }

  getMovies(params: any): Observable<Response> {
    return this.httpService.doGet(null, params, true);
  }
}
