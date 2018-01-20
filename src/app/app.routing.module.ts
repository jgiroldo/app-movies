import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginGuard } from './guard/login.guard';
import { LogoutGuard } from './guard/logout.guard';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LogoutGuard] },
  { path: 'movies', component: MoviesComponent, canActivate: [LoginGuard] }
  // { path: '**', redirectTo: '/movies', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
