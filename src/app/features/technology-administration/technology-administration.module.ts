import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TechnologyDetailComponent } from './pages/technology-detail/technology-detail.component';
import {TechnologiesOverviewComponent} from "./pages/technologies-overview/technologies-overview.component";
import {RouterModule, Routes} from "@angular/router";
import { PublishModalComponent } from './components/publish-modal/publish-modal.component';

const routes: Routes = [
  { path: '', component: TechnologiesOverviewComponent },
  { path: ':id', component: TechnologyDetailComponent }
]

@NgModule({
  declarations: [
    TechnologiesOverviewComponent,
    TechnologyDetailComponent,
    PublishModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
    ReactiveFormsModule
  ]
})
export class TechnologyAdministrationModule { }
