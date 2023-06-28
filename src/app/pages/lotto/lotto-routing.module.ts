import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LottoPage } from './lotto.page';

const routes: Routes = [
  {
    path: '',
    component: LottoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LottoPageRoutingModule {}
