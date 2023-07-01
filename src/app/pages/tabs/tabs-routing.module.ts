import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
      path: 'tabs',
      component: TabsPage,
      children: [
        {
          path: 'news',
          children: [
            {
              path: '',
              loadChildren: () => import('../news/news.module').then( m => m.NewsPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../newsarticles/newsarticles.module').then( m => m.NewsarticlesPageModule)
            }
          ]
        },
        {
          path: 'sport',
          children: [
            {
              path: '',
              loadChildren: () => import('../sport/sport.module').then( m => m.SportPageModule)
            },
            {
              path: ':id',
              loadChildren: () => import('../sportarticle/sportarticle.module').then( m => m.SportarticlePageModule)
            }
          ]
        },
        {
          path: 'weather',
          children: [
            {
              path: '',
              loadChildren: () => import('../weather/weather.module').then( m => m.WeatherPageModule)
            }
          ]
        },
        {
          path: 'lotto',
          children: [
            {
              path: '',
              loadChildren: () => import('../lotto/lotto.module').then( m => m.LottoPageModule)
            }
          ]
        }
      ]
    },
    {
      path: '',
      redirectTo: '/tabs/news',
      pathMatch: 'full'
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}

