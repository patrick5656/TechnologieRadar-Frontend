import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Technology} from "../../../../shared/types/Technology";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ring} from "../../../../shared/types/Ring";
import {Category} from "../../../../shared/types/Category";
import {TechnologyService} from "../../../../shared/services/technology.service";
import { Location } from '@angular/common'
import {TechnologyInsertDTO} from "../../../../shared/types/DTO/TechnologyInsertDTO";


interface FormValues {
  name: string,
  category: string,
  description: string,
  ring?: string,
  ring_description?: string
}


@Component({
  selector: 'technology-form',
  templateUrl: './technology-form.component.html',
  styleUrl: './technology-form.component.css'
})
export class TechnologyFormComponent implements OnInit{
  @Input()
  public technology?: Technology
  @Output()
  technologyChange = new EventEmitter<Technology>();

  registerForm!: FormGroup;
  submitted = false;

  public ringValues = Object.values(Ring);
  public categoryValues = Object.values(Category);

  constructor(
    private formBuilder: FormBuilder,
    private technologyService: TechnologyService,
    private location: Location
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: [this.technology ? this.technology.name : "", Validators.required],
      category: [this.technology ? this.technology.category : "", Validators.required],
      description: [this.technology ? this.technology.description : "", Validators.required],
      ring: [this.technology ? this.technology.ring : ""],
      ring_description: [this.technology ? this.technology.ring_description : ""],
    });
  }

  onSubmit(data: FormValues) {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    let category: Category | null = this.getCategoryFromString(data.category);
    if (category === null) {
      return;
    }

    if (this.technology === null || this.technology === undefined) {
      let technologyInsertDto: TechnologyInsertDTO = {
        name: data.name,
        category: category,
        description: data.description,
        ring: this.getRingFromString(data.ring),
        ring_description: data.ring_description
        // TODO: send created by user
      }
      this.technologyService.addTechnology(technologyInsertDto).subscribe(() => this.location.back());


    } else {
      this.technology.name = data.name;
      this.technology.description = data.description;
      this.technology.category = category;
      this.technology.ring = this.getRingFromString(data.ring);
      this.technology.ring_description = data.ring_description;
      this.technologyService.updateTechnology(this.technology).subscribe(() => this.location.back());
    }
  }

  getRingFromString(ringString: string | undefined): Ring | undefined {
    const ringEntries = Object.entries(Ring);
    // TODO: Update to only get values
    const matchingRingEntry = ringEntries.find(([key, value]) => value === ringString);

    if (matchingRingEntry) {
      return matchingRingEntry[1] as Ring;
    }

    return undefined;
  }

  getCategoryFromString(categoryString: string): Category | null {
    const categoryValues = Object.values(Category);
    const matchingCategory = categoryValues.find((value) => value === categoryString);

    if (matchingCategory) {
      return matchingCategory;
    }

    return null;
  }

}
