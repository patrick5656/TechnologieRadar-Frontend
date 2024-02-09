import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { TechnologyDetailComponent } from './pages/technology-detail/technology-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {TechnologiesOverviewComponent} from "./pages/technologies-overview/technologies-overview.component";


@NgModule({
  declarations: [
    TechnologiesOverviewComponent,
    TechnologyDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ]
})
export class TechnologyAdministrationModule { }
