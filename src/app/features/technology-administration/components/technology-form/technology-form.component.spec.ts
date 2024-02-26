import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TechnologyFormComponent} from './technology-form.component';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {TechnologyService} from "../../../../shared/services/technology.service";
import {RouterTestingModule} from "@angular/router/testing";
import {Category} from "../../../../shared/types/Category";
import {Ring} from "../../../../shared/types/Ring";
import {of} from "rxjs";
import {Technology} from "../../../../shared/types/Technology";
import {Router} from "@angular/router";
import {TechnologyInsertDTO} from "../../../../shared/types/DTO/TechnologyInsertDTO";
import {TechnologyUpdateDTO} from "../../../../shared/types/DTO/TechnologyUpdateDTO";
import {TechnologyUpdateRingDTO} from "../../../../shared/types/DTO/TechnologyUpdateRingDto";

describe('TechnologyFormComponent', () => {
  let component: TechnologyFormComponent;
  let fixture: ComponentFixture<TechnologyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologyFormComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        FormBuilder,
        {
          provide: TechnologyService,
          useValue: jasmine.createSpyObj('TechnologyService', ['addTechnology', 'updateTechnology', 'updateTechnologyRing'])
        },
        {
          provide: Location,
          useValue: jasmine.createSpyObj('Location', ['back'])
        },
        Router,
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not create or update technology with invalid data', () => {
    const technology: Technology = {
      id: 1,
      name: '',
      category: Category.TECHNIQUES,
      description: '',
      ring: Ring.ADOPT,
      ring_description: 'Some ring description',
      published: true,
      createdByUserId: 1,
      createdAt: new Date()
    };

    TestBed.get(TechnologyService).addTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnologyRing.and.returnValue(of([]));

    component.technology = technology;
    fixture.detectChanges();

    const formValues = {
      name: '',
      category: Category.TECHNIQUES,
      description: '',
      ring: Ring.ADOPT,
      ring_description: 'Some ring description'
    };
    component.onSubmit(formValues);


    expect(TestBed.get(TechnologyService).addTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnologyRing).not.toHaveBeenCalled();
  });

  it('should not create or update technology with invalid data (name and description)', () => {
    const technology: Technology = {
      id: 1,
      name: '',
      category: Category.TECHNIQUES,
      description: '',
      ring: Ring.ADOPT,
      ring_description: 'Some ring description',
      published: true,
      createdByUserId: 1,
      createdAt: new Date()
    };

    TestBed.get(TechnologyService).addTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnologyRing.and.returnValue(of([]));

    component.technology = technology;
    fixture.detectChanges();

    const formValues = {
      name: '',
      category: Category.TECHNIQUES,
      description: '',
      ring: Ring.ADOPT,
      ring_description: 'Some ring description'
    };
    component.onSubmit(formValues);


    expect(TestBed.get(TechnologyService).addTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnologyRing).not.toHaveBeenCalled();
  });

  it('should not create or update technology with invalid data (ring and ring description)', () => {
    const technology: Technology = {
      id: 1,
      name: 'test name',
      category: Category.TECHNIQUES,
      description: 'description',
      ring: undefined,
      ring_description: 'description',
      published: true,
      createdByUserId: 1,
      createdAt: new Date()
    };

    TestBed.get(TechnologyService).addTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnologyRing.and.returnValue(of([]));

    component.technology = technology;
    fixture.detectChanges();
    component.onRingDescriptionChanged();

    const formValues = {
      name: '',
      category: Category.TECHNIQUES,
      description: '',
      ring: undefined,
      ring_description: 'new description'
    };
    component.onSubmit(formValues);


    expect(TestBed.get(TechnologyService).addTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnologyRing).not.toHaveBeenCalled();
  });

  it('should create a technology with valid data', () => {
    const technology: Technology = {
      id: 1,
      name: 'new',
      category: Category.TECHNIQUES,
      description: 'description',
      ring: Ring.ADOPT,
      ring_description: 'Some ring description',
      published: true,
      createdByUserId: 1,
      createdAt: new Date()
    };
    component.technology = technology;
    component.ngOnInit();

    TestBed.get(TechnologyService).addTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnologyRing.and.returnValue(of([]));
    fixture.detectChanges();

    component.technology = undefined
    const formValues = {
      name: 'new',
      category: Category.TECHNIQUES,
      description: 'description',
      ring: Ring.ADOPT,
      ring_description: 'Some ring description'
    };
    component.onSubmit(formValues);

    const technologyInsertDTO: TechnologyInsertDTO = {
      name: 'new',
      category: Category.TECHNIQUES,
      description: 'description',
      ring: Ring.ADOPT,
      ring_description: 'Some ring description'
    };
    expect(TestBed.get(TechnologyService).addTechnology).toHaveBeenCalledWith(technologyInsertDTO);

    expect(TestBed.get(TechnologyService).updateTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnologyRing).not.toHaveBeenCalled();
  });

  it('should update a technology with valid data', () => {
    const technology: Technology = {
      id: 1,
      name: 'new',
      category: Category.TECHNIQUES,
      description: 'description old',
      ring: Ring.ADOPT,
      ring_description: 'Some ring description',
      published: true,
      createdByUserId: 1,
      createdAt: new Date()
    };
    component.technology = technology;
    component.ngOnInit();

    TestBed.get(TechnologyService).addTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnologyRing.and.returnValue(of([]));
    fixture.detectChanges();

    const formValues = {
      name: 'new update',
      category: Category.TECHNIQUES,
      description: 'description',
      ring: Ring.ADOPT,
      ring_description: 'Some ring description'
    };
    component.onSubmit(formValues);

    const technologyUpdateDTO: TechnologyUpdateDTO = {
      id: 1,
      name: 'new update',
      category: Category.TECHNIQUES,
      description: 'description',
    };
    expect(TestBed.get(TechnologyService).addTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnology).toHaveBeenCalledWith(technologyUpdateDTO);

    expect(TestBed.get(TechnologyService).updateTechnologyRing).not.toHaveBeenCalled();
  });

  it('should update the ring of a technology with valid data', () => {
    const technology: Technology = {
      id: 1,
      name: 'new',
      category: Category.TECHNIQUES,
      description: 'description',
      ring: Ring.ADOPT,
      ring_description: 'Some old ring description',
      published: true,
      createdByUserId: 1,
      createdAt: new Date()
    };
    component.technology = technology;
    component.ngOnInit();

    TestBed.get(TechnologyService).addTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnologyRing.and.returnValue(of([]));
    fixture.detectChanges();

    const formValues = {
      name: 'new',
      category: Category.TECHNIQUES,
      description: 'description',
      ring: Ring.TRIAL,
      ring_description: 'Some new ring description'
    };
    component.onSubmit(formValues);

    const technologyUpdateRingDTO: TechnologyUpdateRingDTO = {
      id: 1,
      ring: Ring.TRIAL,
      ring_description: 'Some new ring description'
    };
    expect(TestBed.get(TechnologyService).addTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnologyRing).toHaveBeenCalledWith(technologyUpdateRingDTO);
  });

  it('should update technology and the ring aswell with valid data', () => {
    const technology: Technology = {
      id: 1,
      name: 'new',
      category: Category.TECHNIQUES,
      description: 'description',
      ring: Ring.ADOPT,
      ring_description: 'Some old ring description',
      published: true,
      createdByUserId: 1,
      createdAt: new Date()
    };
    component.technology = technology;
    component.ngOnInit();

    TestBed.get(TechnologyService).addTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnology.and.returnValue(of([]));
    TestBed.get(TechnologyService).updateTechnologyRing.and.returnValue(of([]));
    fixture.detectChanges();

    const formValues = {
      name: 'new update',
      category: Category.TECHNIQUES,
      description: 'description',
      ring: Ring.TRIAL,
      ring_description: 'Some new ring description'
    };
    component.onSubmit(formValues);

    const technologyUpdateDTO: TechnologyUpdateDTO = {
      id: 1,
      name: 'new update',
      category: Category.TECHNIQUES,
      description: 'description',
    };

    const technologyUpdateRingDTO: TechnologyUpdateRingDTO = {
      id: 1,
      ring: Ring.TRIAL,
      ring_description: 'Some new ring description'
    };
    expect(TestBed.get(TechnologyService).addTechnology).not.toHaveBeenCalled();
    expect(TestBed.get(TechnologyService).updateTechnology).toHaveBeenCalledWith(technologyUpdateDTO);
    expect(TestBed.get(TechnologyService).updateTechnologyRing).toHaveBeenCalledWith(technologyUpdateRingDTO);
  });

  it('getRingFromString returns correct data', () => {
    fixture.detectChanges();

    expect(component.getRingFromString('Adopt')).toEqual(Ring.ADOPT);
    expect(component.getRingFromString('Trial')).toEqual(Ring.TRIAL);
    expect(component.getRingFromString('Assess')).toEqual(Ring.ASSESS);
    expect(component.getRingFromString('Hold')).toEqual(Ring.HOLD);
    expect(component.getRingFromString('')).toEqual(undefined);
  });

  it('getCategoryFromString returns correct data', () => {
    fixture.detectChanges();

    expect(component.getCategoryFromString('Techniques')).toEqual(Category.TECHNIQUES);
    expect(component.getCategoryFromString('Tools')).toEqual(Category.TOOLS);
    expect(component.getCategoryFromString('Platforms')).toEqual(Category.PLATFORMS);
    expect(component.getCategoryFromString('Languages & Framework')).toEqual(Category.LANGUAGES_AND_FRAMEWORKS);
    expect(component.getCategoryFromString('')).toEqual(null);
  });


});
