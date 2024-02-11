import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from '@angular/common';
import { TechnologyDetailComponent } from './pages/technology-detail/technology-detail.component';
import {TechnologiesOverviewComponent} from "./pages/technologies-overview/technologies-overview.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: TechnologiesOverviewComponent },
  { path: ':id', component: TechnologyDetailComponent }
]

@NgModule({
  declarations: [
    TechnologiesOverviewComponent,
    TechnologyDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TechnologyAdministrationModule { }
