import { NgModule } from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'manageTechnologies',
    loadChildren: () =>
      import('./features/technology-administration/technology-administration.module').then(
        (m) => m.TechnologyAdministrationModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('./features/technology-view/technology-view.module').then(
        (m) => m.TechnologyViewModule
      )
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
