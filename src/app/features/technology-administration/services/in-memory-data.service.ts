import { Injectable } from '@angular/core';
import {Technology} from "../types/Technology";
import {Category} from "../types/Category";
import {InMemoryDbService} from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const technologies: Technology[] = [
      { id: 12, name: 'Angular', category: Category.LANGUAGES_AND_FRAMEWORKS, description: 'A platform for building mobile and desktop web applications.', published: true },
      { id: 13, name: 'React', category: Category.LANGUAGES_AND_FRAMEWORKS, description: 'A JavaScript library for building user interfaces.', published: true },
      { id: 14, name: 'Vue.js', category: Category.LANGUAGES_AND_FRAMEWORKS, description: 'A progressive JavaScript framework for building UIs.', published: true },
      { id: 15, name: 'Node.js', category: Category.LANGUAGES_AND_FRAMEWORKS, description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.', published: true },
      { id: 16, name: 'Express.js', category: Category.LANGUAGES_AND_FRAMEWORKS, description: 'A web application framework for Node.js.', published: true },
      { id: 17, name: 'Django', category: Category.LANGUAGES_AND_FRAMEWORKS, description: 'A high-level Python web framework.', published: true },
      { id: 18, name: 'Spring Boot', category: Category.LANGUAGES_AND_FRAMEWORKS, description: 'An open-source Java-based framework.', published: true },
      { id: 19, name: 'Ruby on Rails', category: Category.LANGUAGES_AND_FRAMEWORKS, description: 'A web application framework written in Ruby.', published: true },
      { id: 20, name: 'ASP.NET Core', category: Category.LANGUAGES_AND_FRAMEWORKS, description: 'A cross-platform, high-performance framework for building modern, cloud-based, Internet-connected applications.', published: true }
    ];

    return { technologies };
  }

  generateId(technologies: Technology[]): number {
    return technologies.length > 0 ? Math.max(...technologies.map(technology => technology.id)) + 1 : 11;
  }

}
