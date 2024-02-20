import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { TechnologyEditComponent } from './pages/technology-edit/technology-edit.component';
import {TechnologiesOverviewComponent} from "./pages/technologies-overview/technologies-overview.component";
import {RouterModule, Routes} from "@angular/router";
import { PublishModalComponent } from './components/publish-modal/publish-modal.component';
import { TechnologyFormComponent } from './components/technology-form/technology-form.component';
import { TechnologyCreateComponent } from './pages/technology-create/technology-create.component';

const routes: Routes = [
  { path: '', component: TechnologiesOverviewComponent },
  { path: 'create', component: TechnologyCreateComponent },
  { path: ':id', component: TechnologyEditComponent }
]

@NgModule({
  declarations: [
    TechnologiesOverviewComponent,
    TechnologyEditComponent,
    PublishModalComponent,
    TechnologyFormComponent,
    TechnologyCreateComponent
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
