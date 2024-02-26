import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologiesOverviewComponent } from './technologies-overview.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TechnologyService} from "../../../../shared/services/technology.service";
import {Category} from "../../../../shared/types/Category";
import {Technology} from "../../../../shared/types/Technology";
import {Ring} from "../../../../shared/types/Ring";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";

describe('TechnologiesOverviewComponent', () => {
  let component: TechnologiesOverviewComponent;
  let fixture: ComponentFixture<TechnologiesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologiesOverviewComponent],
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule, RouterTestingModule],
      providers: [{
        provide: TechnologyService, useValue: jasmine.createSpyObj('technologyService', ['getTechnologies']) }]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologiesOverviewComponent);
    component = fixture.componentInstance;
  });

  it('should load technologies', () => {
    const technologies: Technology[] = [
      {
        id: 1,
        name: 'Angular1',
        category: Category.LANGUAGES_AND_FRAMEWORKS,
        description: 'A platform for building mobile and desktop web applications.',
        ring: Ring.ADOPT,
        ring_description: 'test',
        published: true,
        createdByUserId: 1,
        createdAt: new Date()
      },
      {
        id: 2,
        name: 'Angular2',
        category: Category.LANGUAGES_AND_FRAMEWORKS,
        description: 'test description.',
        ring: Ring.ADOPT,
        ring_description: 'test',
        published: true,
        createdByUserId: 1,
        createdAt: new Date()
      },
      {
        id: 3,
        name: 'Angular3',
        category: Category.TOOLS,
        description: 'description',
        ring: Ring.TRIAL,
        ring_description: 'test',
        published: true,
        createdByUserId: 1,
        createdAt: new Date()
      },
    ];

    TestBed.get(TechnologyService).getTechnologies.and.returnValue(of(technologies));
    fixture.detectChanges();

    expect(TestBed.get(TechnologyService).getTechnologies.calls.count()).toBe(1);

    expect(component.technologies.length).toEqual(3);
    expect(component.technologies).toEqual(technologies);
  });

  it('should update technology to publish', () => {
    const technologies: Technology[] = [
      {
        id: 1,
        name: 'Angular1',
        category: Category.LANGUAGES_AND_FRAMEWORKS,
        description: 'A platform for building mobile and desktop web applications.',
        ring: Ring.ADOPT,
        ring_description: 'test',
        published: true,
        createdByUserId: 1,
        createdAt: new Date()
      }
    ];

    TestBed.get(TechnologyService).getTechnologies.and.returnValue(of(technologies));
    fixture.detectChanges();

    // @ts-ignore
    component.showPublishModal(technologies[0]);

    expect(component.technologyToPublish).toEqual(technologies[0]);
  });

  it('should reload technologies after removing technology to publish', () => {
    const technologies: Technology[] = [
      {
        id: 1,
        name: 'Angular1',
        category: Category.LANGUAGES_AND_FRAMEWORKS,
        description: 'A platform for building mobile and desktop web applications.',
        ring: Ring.ADOPT,
        ring_description: 'test',
        published: true,
        createdByUserId: 1,
        createdAt: new Date()
      }
    ];

    TestBed.get(TechnologyService).getTechnologies.and.returnValue(of(technologies));
    fixture.detectChanges();

    // @ts-ignore
    component.showPublishModal(technologies[0]);
    expect(component.technologyToPublish).toEqual(technologies[0]);

    component.technologyToPublish = null;
    expect(TestBed.get(TechnologyService).getTechnologies.calls.count()).toBe(2);
    expect(component.technologyToPublish).toEqual(null);
  });
});
