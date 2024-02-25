import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTechnologiesComponent } from './view-technologies.component';

describe('ViewTechnologiesComponent', () => {
  let component: ViewTechnologiesComponent;
  let fixture: ComponentFixture<ViewTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTechnologiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
