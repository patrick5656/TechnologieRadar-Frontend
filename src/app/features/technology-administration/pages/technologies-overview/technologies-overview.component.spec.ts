import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesOverviewComponent } from './technologies-overview.component';

describe('TechnologiesOverviewComponent', () => {
  let component: TechnologiesOverviewComponent;
  let fixture: ComponentFixture<TechnologiesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologiesOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologiesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
