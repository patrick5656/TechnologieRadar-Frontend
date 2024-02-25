import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ViewTechnologiesComponent } from './pages/view-technologies/view-technologies.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: '', component: ViewTechnologiesComponent }
]

@NgModule({
  declarations: [
    ViewTechnologiesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
    ReactiveFormsModule
  ]
})
export class TechnologyViewModule { }
