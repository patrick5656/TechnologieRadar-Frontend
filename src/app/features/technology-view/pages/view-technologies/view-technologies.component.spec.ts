import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTechnologiesComponent } from './view-technologies.component';
import {TechnologyService} from "../../../../shared/services/technology.service";
import {Technology} from "../../../../shared/types/Technology";
import {Category} from "../../../../shared/types/Category";
import {Ring} from "../../../../shared/types/Ring";
import {of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule} from "@angular/forms";

describe('ViewTechnologiesComponent', () => {
  let component: ViewTechnologiesComponent;
  let fixture: ComponentFixture<ViewTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [ViewTechnologiesComponent],
      providers: [{
        provide: TechnologyService, useValue: jasmine.createSpyObj('technologyService', ['getPublishedTechnologies']) }]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewTechnologiesComponent);
    component = fixture.componentInstance;
  });

  it('should get technologies', () => {
    const technologies: Technology[] = [
      {
        id: 3,
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
        id: 4,
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
        id: 5,
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

    TestBed.get(TechnologyService).getPublishedTechnologies.and.returnValue(of(technologies));
    fixture.detectChanges();

    expect(TestBed.get(TechnologyService).getPublishedTechnologies.calls.count()).toBe(1);
    const groupedByCategoryTechnologies = component.groupedByCategoryTechnologies;
    const groupedByRingTechnologies = component.groupedByRingTechnologies;

    expect(groupedByCategoryTechnologies).toBeTruthy();
    expect(groupedByRingTechnologies).toBeTruthy();

    expect(groupedByCategoryTechnologies.has(Category.LANGUAGES_AND_FRAMEWORKS)).toBeTrue();
    expect(groupedByCategoryTechnologies.has(Category.TOOLS)).toBeTrue();
    expect(groupedByRingTechnologies.has(Ring.ADOPT)).toBeTrue();
    expect(groupedByRingTechnologies.has(Ring.TRIAL)).toBeTrue();

    // @ts-ignore
    expect(groupedByCategoryTechnologies.get(Category.LANGUAGES_AND_FRAMEWORKS).length).toEqual(2);
    // @ts-ignore
    expect(groupedByCategoryTechnologies.get(Category.TOOLS).length).toEqual(1);

    // @ts-ignore
    expect(groupedByRingTechnologies.get(Ring.ADOPT).length).toEqual(2);
    // @ts-ignore
    expect(groupedByRingTechnologies.get(Ring.TRIAL).length).toEqual(1);

  });
});
