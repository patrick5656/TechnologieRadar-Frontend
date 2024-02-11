import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common'
import {Technology} from "../../types/Technology";
import {TechnologyService} from "../../services/technology.service";

@Component({
  selector: 'app-technology-detail',
  templateUrl: './technology-detail.component.html',
  styleUrl: './technology-detail.component.css'
})
export class TechnologyDetailComponent implements OnInit {
  @Input({required: true})
  public technology!: Technology

  constructor(
    private route: ActivatedRoute,
    private technologyService: TechnologyService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.loadTechnology()
  }

  loadTechnology(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.technologyService.getTechnology(id).subscribe((technology) => (this.technology = technology));
  }

  goBack() {
    this.location.back();
  }

  save(): void {
    if (this.technology) {
      this.technologyService.updateTechnology(this.technology).subscribe(() => this.goBack());
    }
  }

}
