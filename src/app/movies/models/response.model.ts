import { MovieModel } from './movie';

export class ResponseModel {
  Response: String;
  Search: Array<MovieModel> = [];
  totalResults: String;

  constructor(res: any) {
    this.Response = res.Response;
    this.Search = res.Search;
    this.totalResults = res.totalResults;
  }
}
