import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  TechnologiesOverviewComponent
} from "./features/technology-administration/pages/technologies-overview/technologies-overview.component";

const routes: Routes = [
  { path: 'manageTechnologies', component: TechnologiesOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
