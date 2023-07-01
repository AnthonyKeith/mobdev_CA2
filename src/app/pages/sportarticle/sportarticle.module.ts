import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportarticlePageRoutingModule } from './sportarticle-routing.module';

import { SportarticlePage } from './sportarticle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportarticlePageRoutingModule
  ],
  declarations: [SportarticlePage]
})
export class SportarticlePageModule {}
