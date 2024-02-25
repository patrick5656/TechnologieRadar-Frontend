import { TechnologyService } from './technology.service';
import {of} from "rxjs";
import {Technology} from "../types/Technology";
import {Category} from "../types/Category";
import {Ring} from "../types/Ring";
import {TechnologyInsertDTO} from "../types/DTO/TechnologyInsertDTO";
import {TechnologyUpdateDTO} from "../types/DTO/TechnologyUpdateDTO";
import {TechnologyUpdateRingDTO} from "../types/DTO/TechnologyUpdateRingDto";
import {TechnologyPublishDTO} from "../types/DTO/TechnologyPublishDTO";

describe('TechnologyService', () => {

  let httpClientSpy: {
    get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy };
  let technologyService: TechnologyService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put']);
    technologyService = new TechnologyService(httpClientSpy as any);
  });


  it('getTechnology should return technology', () => {
    const expectedTechnology: Technology = {
      id: 1,
      name: 'Angular',
      category: Category.LANGUAGES_AND_FRAMEWORKS,
      description: 'A platform for building mobile and desktop web applications.',
      published: true,
      createdByUserId: 1,
      createdAt: new Date()
    };

    httpClientSpy.get.and.returnValue(of(expectedTechnology));
    technologyService.getTechnology(1).subscribe(technology=> expect(technology).toEqual(expectedTechnology));
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('get technologies should return technologies', () => {
    const expectedTechnology: Technology[] = [{
      id: 1,
      name: 'Angular',
      category: Category.LANGUAGES_AND_FRAMEWORKS,
      description: 'A platform for building mobile and desktop web applications.',
      published: true,
      createdByUserId: 1,
      createdAt: new Date()
    },
      {
        id: 2,
        name: 'React',
        category: Category.TOOLS,
        description: 'test description',
        published: false,
        createdByUserId: 1,
        createdAt: new Date()
      }];


    httpClientSpy.get.and.returnValue(of(expectedTechnology));
    technologyService.getTechnologies().subscribe(technology=> expect(technology).toEqual(expectedTechnology));
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('get published technologies should return technologies', () => {
    const expectedTechnology: Technology[] = [{
      id: 3,
      name: 'Angular',
      category: Category.LANGUAGES_AND_FRAMEWORKS,
      description: 'A platform for building mobile and desktop web applications.',
      published: true,
      createdByUserId: 1,
      createdAt: new Date()
    },
      {
        id: 4,
        name: 'Vue.js',
        category: Category.PLATFORMS,
        description: 'test',
        published: true,
        createdByUserId: 1,
        createdAt: new Date()
      }];


    httpClientSpy.get.and.returnValue(of(expectedTechnology));
    technologyService.getPublishedTechnologies().subscribe(technology=> expect(technology).toEqual(expectedTechnology));
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

  it('addTechnology should add hero', () => {
    const expectedTechnology: TechnologyInsertDTO = {
      name: 'Angular',
      category: Category.LANGUAGES_AND_FRAMEWORKS,
      description: 'A platform for building mobile and desktop web applications.'
    };

    httpClientSpy.post.and.returnValue(of(expectedTechnology));

    technologyService.addTechnology(expectedTechnology);
    expect(httpClientSpy.post.calls.count()).toBe(1);
  });

  it('updateTechnology should update technology', () => {
    const expectedTechnology: TechnologyUpdateDTO = {
      id: 1,
      name: 'Angular',
      category: Category.LANGUAGES_AND_FRAMEWORKS,
      description: 'A platform for building mobile and desktop web applications.',
    };

    httpClientSpy.put.and.returnValue(of(expectedTechnology));

    technologyService.updateTechnology(expectedTechnology);
    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

  it('updateTechnologyRing should update technology', () => {
    const expectedTechnology: TechnologyUpdateRingDTO = {
      id: 1,
      ring: Ring.ADOPT,
      ring_description: 'ring description'
    };

    httpClientSpy.put.and.returnValue(of(expectedTechnology));

    technologyService.updateTechnologyRing(expectedTechnology);
    expect(httpClientSpy.put.calls.count()).toBe(1);
  });

  it('publishTechnology should publish technology', () => {
    const expectedTechnology: TechnologyPublishDTO = {
      id: 1,
      ring: Ring.ADOPT,
      ring_description: 'ring description',
    };

    httpClientSpy.put.and.returnValue(of(expectedTechnology));

    technologyService.publishTechnology(expectedTechnology);
    expect(httpClientSpy.put.calls.count()).toBe(1);
  });


});
