import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PublishModalComponent} from './publish-modal.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {TechnologyService} from "../../../../shared/services/technology.service";
import {Technology} from "../../../../shared/types/Technology";
import {Category} from "../../../../shared/types/Category";
import {Ring} from "../../../../shared/types/Ring";
import {TechnologyPublishDTO} from "../../../../shared/types/DTO/TechnologyPublishDTO";
import {of} from "rxjs";

describe('PublishModalComponent', () => {
  let component: PublishModalComponent;
  let fixture: ComponentFixture<PublishModalComponent>;

  const technology: Technology = {
    id: 1,
    name: 'Angular1',
    category: Category.TECHNIQUES,
    description: 'Some description',
    ring: Ring.ADOPT,
    ring_description: 'Some ring description',
    published: true,
    createdByUserId: 1,
    createdAt: new Date()
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishModalComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [{
          provide: TechnologyService, useValue: jasmine.createSpyObj('technologyService', ['publishTechnology'])
        }]
    }).compileComponents();

    fixture = TestBed.createComponent(PublishModalComponent);
    component = fixture.componentInstance;
    component.technology = technology
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call publishTechnology when form submitted with valid input', () => {
    const formValues = {
      ring: Ring.ADOPT,
      ring_description: 'Some ring description'
    };
    TestBed.get(TechnologyService).publishTechnology.and.returnValue(of([]));
    fixture.detectChanges();

    component.onSubmit(formValues);

    const expectedPublishDTO: TechnologyPublishDTO = {
      id: technology.id,
      ring: Ring.ADOPT,
      ring_description: 'Some ring description'
    };
    expect(TestBed.get(TechnologyService).publishTechnology).toHaveBeenCalledWith(expectedPublishDTO);
  });

  it('should not call publishTechnology when form submitted with invalid input', () => {
    const formValues = {
      ring: Ring.ADOPT,
      ring_description: ''
    };
    component.technology.ring = undefined; // set the ring to an invalid value to submit

    fixture.detectChanges();

    component.onSubmit(formValues);

    expect(TestBed.get(TechnologyService).publishTechnology).not.toHaveBeenCalled();
  });

  it('getRingFromString return correct ring', () => {
    fixture.detectChanges();

    expect(component.getRingFromString('Adopt')).toEqual(Ring.ADOPT);
    expect(component.getRingFromString('Trial')).toEqual(Ring.TRIAL);
    expect(component.getRingFromString('Assess')).toEqual(Ring.ASSESS);
    expect(component.getRingFromString('Hold')).toEqual(Ring.HOLD);
    expect(component.getRingFromString('')).toEqual(undefined);

  });

});
