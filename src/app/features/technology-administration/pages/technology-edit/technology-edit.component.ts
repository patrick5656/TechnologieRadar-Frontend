import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Technology} from "../../../../shared/types/Technology";
import {TechnologyService} from "../../../../shared/services/technology.service";

@Component({
  selector: 'app-technology-edit',
  templateUrl: './technology-edit.component.html',
  styleUrl: './technology-edit.component.css'
})
export class TechnologyEditComponent implements OnInit {
  public technology!: Technology

  constructor(
    private route: ActivatedRoute,
    private technologyService: TechnologyService,
  ) {}

  ngOnInit(): void {
    this.loadTechnology()
  }

  loadTechnology(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.technologyService.getTechnology(id).subscribe((technology) => (this.technology = technology));
  }

}
