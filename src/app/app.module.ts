import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './not-found.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginService } from './login/login.service';
import { MoviesService } from './movies/movies.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpServiceClient } from './http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';
import { SharedModule, PanelModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataGridModule } from 'primeng/datagrid';
import { DataTableModule } from 'primeng/datatable';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    DataGridModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService, MoviesService, HttpServiceClient, LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
