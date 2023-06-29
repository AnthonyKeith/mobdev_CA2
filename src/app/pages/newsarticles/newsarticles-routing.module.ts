import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsarticlesPage } from './newsarticles.page';

const routes: Routes = [
  {
    path: '',
    component: NewsarticlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsarticlesPageRoutingModule {}
