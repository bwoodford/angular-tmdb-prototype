import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';

const routes: Routes = [
  {path: '', component: PopularMoviesComponent, children: [

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
