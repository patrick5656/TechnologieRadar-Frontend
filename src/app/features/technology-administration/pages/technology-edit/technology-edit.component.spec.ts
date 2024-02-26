import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyEditComponent } from './technology-edit.component';
import {Technology} from "../../../../shared/types/Technology";
import {Category} from "../../../../shared/types/Category";
import {Ring} from "../../../../shared/types/Ring";
import {TechnologyService} from "../../../../shared/services/technology.service";
import {of} from "rxjs";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TechnologyFormComponent} from "../../components/technology-form/technology-form.component";

describe('TechnologyDetailComponent', () => {
  let component: TechnologyEditComponent;
  let fixture: ComponentFixture<TechnologyEditComponent>;

  beforeEach(async () => {
    const activatedRouteStub = {
      snapshot: {
        paramMap: {
          get: (key: string) => {
            return 1;
          }
        }
      }
    };

    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [TechnologyEditComponent, TechnologyFormComponent],
      providers: [
        {
          provide: TechnologyService,
          useValue: jasmine.createSpyObj('technologyService', ['getTechnology'])
        },
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyEditComponent);
    component = fixture.componentInstance;
  });


  it('should loadTechnology', () => {
    const technology: Technology = {
        id: 1,
        name: 'Angular1',
        category: Category.LANGUAGES_AND_FRAMEWORKS,
        description: 'A platform for building mobile and desktop web applications.',
        ring: Ring.ADOPT,
        ring_description: 'test',
        published: true,
        createdByUserId: 1,
        createdAt: new Date()
    };

    TestBed.get(TechnologyService).getTechnology.and.returnValue(of(technology))
    fixture.detectChanges();

    expect(TestBed.get(TechnologyService).getTechnology.calls.count()).toBe(1);
    expect(component.technology).toEqual(technology);
  });

});
