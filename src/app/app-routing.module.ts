import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNewsComponent } from './pages/main-news/main-news.component';

const routes: Routes = [
  { path: '', component: MainNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
