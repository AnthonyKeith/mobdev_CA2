import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)},
  {
    path: 'newsarticles',
    loadChildren: () => import('./pages/newsarticles/newsarticles.module').then( m => m.NewsarticlesPageModule)
  },
  {
    path: 'sportarticle',
    loadChildren: () => import('./pages/sportarticle/sportarticle.module').then( m => m.SportarticlePageModule)
  }
];

@NgModule({
imports: [
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
],
exports: [RouterModule]
})
export class AppRoutingModule { }

