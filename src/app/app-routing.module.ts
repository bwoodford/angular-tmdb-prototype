import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'movies', loadChildren: () => import(`./movies/movies.module`).then(m => m.MoviesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
