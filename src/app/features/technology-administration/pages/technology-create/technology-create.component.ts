import {Component, OnInit} from '@angular/core';
import {Technology} from "../../../../shared/types/Technology";

@Component({
  selector: 'app-technology-create',
  templateUrl: './technology-create.component.html',
  styleUrl: './technology-create.component.css'
})
export class TechnologyCreateComponent implements OnInit{
  public technology?: Technology;

  ngOnInit(): void {
    this.technology = undefined;
  }

}
