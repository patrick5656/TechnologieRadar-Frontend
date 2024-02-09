import {Component, OnInit} from '@angular/core';
import {Technology} from "../../types/Technology";
import {TechnologyService} from "../../services/technology.service";

@Component({
  selector: 'app-technologies-overview',
  templateUrl: './technologies-overview.component.html',
  styleUrl: './technologies-overview.component.css'
})
export class TechnologiesOverviewComponent implements OnInit {

  technologies: Technology[] = [];

  constructor(private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies(): void {
    this.technologyService.getTechnologies()
      .subscribe(technologies => this.technologies = technologies);
  }


  delete(technology: Technology): void {
    this.technologies = this.technologies.filter(t => t !== technology);
    this.technologyService.deleteTechnology(technology.id).subscribe();
  }

}
