import {Component, OnInit } from '@angular/core';
import {Technology} from "../../../../shared/types/Technology";
import {TechnologyService} from "../../../../shared/services/technology.service";

@Component({
  selector: 'app-technologies-overview',
  templateUrl: './technologies-overview.component.html',
  styleUrl: './technologies-overview.component.css'
})
export class TechnologiesOverviewComponent implements OnInit {
  technologies: Technology[] = [];
  public technologyToPublish: Technology | null = null;


  constructor(private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies(): void {
    this.technologyService.getTechnologies()
      .subscribe(technologies => this.technologies = technologies);
  }

  showPublishModal(technology: Technology): void {
    this.technologyToPublish = technology;
  }

}
