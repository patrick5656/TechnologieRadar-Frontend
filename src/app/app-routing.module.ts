import { NgModule } from '@angular/core';
import {NoPreloading, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'manageTechnologies',
    loadChildren: () =>
      import('./features/technology-administration/technology-administration.module').then(
        (m) => m.TechnologyAdministrationModule
      )
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
