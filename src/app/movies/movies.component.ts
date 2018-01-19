import { Component, OnInit } from '@angular/core';
import { MovieModel } from './models/movie';
import { MoviesService } from './movies.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from './models/response.model';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { LoginService } from '../login/login.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesList: Array<any>;
  filterObj: any;
  responseObj = new ResponseModel({});
  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private movieSvc: MoviesService, private loginSvc: LoginService) { }

  ngOnInit() {
    this.filterObj = {
      s: 'american', //tiltle
      y: undefined,
      page: 1 //year,
    };
    this.buildForm();
  }

  buildForm() {
    this.filterForm = this.formBuilder.group({
      'title': [this.filterObj.s, Validators.required],
      'year': [this.filterObj.y],
    });
  }

  loadData(e: any) {
    this.filterObj.page = (e.rows + e.first) / e.rows;
    this.filter();
  }

  filter() {
    this.movieSvc.getMovies(this.filterObj).subscribe(
      data => {
        this.responseObj = new ResponseModel(data);
        this.moviesList = this.responseObj.Search;
      }, err => {

      });
  }

  logout() {
    this.loginSvc.logout();
  }



}
