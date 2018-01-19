import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DataGridModule } from 'primeng/datagrid';
import { DataTableModule } from 'primeng/datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginService } from './login/login.service';
import { MoviesService } from './movies/movies.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule, PanelModule } from 'primeng/primeng';
import { HttpServiceClient } from './http.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent
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
    BrowserAnimationsModule
  ],
  providers: [LoginService, MoviesService, HttpServiceClient, LoginGuard, LogoutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
