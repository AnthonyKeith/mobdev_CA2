import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsarticlesPageRoutingModule } from './newsarticles-routing.module';

import { NewsarticlesPage } from './newsarticles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsarticlesPageRoutingModule
  ],
  declarations: [NewsarticlesPage]
})
export class NewsarticlesPageModule {}
