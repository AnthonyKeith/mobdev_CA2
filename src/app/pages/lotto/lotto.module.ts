import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LottoPageRoutingModule } from './lotto-routing.module';

import { LottoPage } from './lotto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LottoPageRoutingModule
  ],
  declarations: [LottoPage]
})
export class LottoPageModule {}
