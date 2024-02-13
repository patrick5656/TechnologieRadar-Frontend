import { TechnologyService } from './technology.service';
import {of} from "rxjs";
import {Technology} from "../types/Technology";
import {Category} from "../types/Category";

describe('TechnologyService', () => {

  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  let technologyService: TechnologyService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    technologyService = new TechnologyService(httpClientSpy as any);
  });


  it('should return technology', () => {
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
});
