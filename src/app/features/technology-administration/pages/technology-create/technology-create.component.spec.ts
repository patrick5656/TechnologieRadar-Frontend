import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyCreateComponent } from './technology-create.component';
import {TechnologyFormComponent} from "../../components/technology-form/technology-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TechnologyCreateComponent', () => {
  let component: TechnologyCreateComponent;
  let fixture: ComponentFixture<TechnologyCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologyCreateComponent, TechnologyFormComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
