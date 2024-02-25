import {Component, OnInit} from '@angular/core';
import {Technology} from "../../../../shared/types/Technology";
import {TechnologyService} from "../../../../shared/services/technology.service";
import {Category} from "../../../../shared/types/Category";


@Component({
  selector: 'app-view-technologies',
  templateUrl: './view-technologies.component.html',
  styleUrl: './view-technologies.component.css'
})
export class ViewTechnologiesComponent implements OnInit {
  groupedByCategoryTechnologies: Map<string, Technology[]> = new Map();
  groupedByRingTechnologies: Map<string, Technology[]> = new Map();
  groupedByCategory: boolean = true;

  constructor(private technologyService: TechnologyService) {}

  ngOnInit(): void {
    this.getPublishedTechnologies();
  }

  getPublishedTechnologies(): void {
    this.technologyService.getPublishedTechnologies()
      .subscribe(publishedTechnologies => {

        this.groupedByCategoryTechnologies = new Map();
        this.groupedByRingTechnologies = new Map();

        publishedTechnologies.forEach(tech => {
          this.groupTechnologiesByCategory(tech);
          this.groupTechnologiesByRing(tech);
        });
      });
  }

  groupTechnologiesByCategory(tech: Technology): void {
    const key = tech.category;
    if (!this.groupedByCategoryTechnologies.has(key)) {
      this.groupedByCategoryTechnologies.set(key, []);
    }
    // @ts-ignore
    this.groupedByCategoryTechnologies.get(key).push(tech);
  }

  groupTechnologiesByRing(tech: Technology): void {
    const key = tech.ring || 'Uncategorized';
    if (!this.groupedByRingTechnologies.has(key)) {
      this.groupedByRingTechnologies.set(key, []);
    }
    // @ts-ignore
    this.groupedByRingTechnologies.get(key).push(tech);
  }

}
