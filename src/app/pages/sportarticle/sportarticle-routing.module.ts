import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SportarticlePage } from './sportarticle.page';

const routes: Routes = [
  {
    path: '',
    component: SportarticlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportarticlePageRoutingModule {}
