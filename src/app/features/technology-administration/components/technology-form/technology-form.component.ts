import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Technology} from "../../../../shared/types/Technology";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ring} from "../../../../shared/types/Ring";
import {Category} from "../../../../shared/types/Category";
import {TechnologyService} from "../../../../shared/services/technology.service";
import { Location } from '@angular/common'
import {TechnologyInsertDTO} from "../../../../shared/types/DTO/TechnologyInsertDTO";
import {TechnologyUpdateDTO} from "../../../../shared/types/DTO/TechnologyUpdateDTO";
import {TechnologyUpdateRingDTO} from "../../../../shared/types/DTO/TechnologyUpdateRingDto";
import { forkJoin, tap} from "rxjs";


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

  onRingChanged() {
    if (this.registerForm.get('ring')) {
      this.registerForm.get('ring')?.setValidators([Validators.required]);
      this.registerForm.get('ring_description')?.setValidators([Validators.required]);
    } else {
      this.registerForm.get('ring')?.clearValidators();
      this.registerForm.get('ring_description')?.clearValidators();
    }
    this.registerForm.get('ring')?.updateValueAndValidity();
    this.registerForm.get('ring_description')?.updateValueAndValidity();
  }

  onRingDescriptionChanged() {
    console.log('Ring description changed');
    console.log(this.registerForm.get('ring_description')?.value);
    if (this.registerForm.get('ring_description') && this.registerForm.get('ring_description')?.value !== '') {
      console.log('required');
      this.registerForm.get('ring')?.setValidators([Validators.required]);
      this.registerForm.get('ring_description')?.setValidators([Validators.required]);
    } else {
      console.log(' not required');
      this.registerForm.get('ring')?.clearValidators();
      this.registerForm.get('ring_description')?.clearValidators();
    }
    this.registerForm.get('ring')?.updateValueAndValidity();
    this.registerForm.get('ring_description')?.updateValueAndValidity();
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
      this.createTechnology(data, category);
    } else {
      this.updateTechnology(data, category);
    }
  }

  createTechnology(data: FormValues, category: Category) {
    const technologyInsertDto: TechnologyInsertDTO = {
      name: data.name,
      category: category,
      description: data.description,
      ring: this.getRingFromString(data.ring),
      ring_description: data.ring_description
      // TODO: send created by user
    }
    this.technologyService.addTechnology(technologyInsertDto).subscribe(() => this.location.back());
  }

  updateTechnology(data: FormValues, category: Category) {
    if (this.technology === null || this.technology === undefined) {
      return;
    }

    const observables = [];

    if (data.name !== this.technology.name || category !== this.technology.category || data.description !== this.technology.description) {
      // It has changed anything
      const technologyUpdateDto: TechnologyUpdateDTO = {
        id: this.technology.id,
        name: data.name,
        category: category,
        description: data.description,
        // TODO: Send changed by user
      }
      observables.push(this.technologyService.updateTechnology(technologyUpdateDto))
    }

    const ring = this.getRingFromString(data.ring);
    if (ring !== this.technology.ring || this.technology.ring_description !== data.ring_description) {
      if (ring !== undefined && data.ring_description) {
        const technologyUpdateDto: TechnologyUpdateRingDTO = {
          id: this.technology.id,
          ring: ring,
          ring_description: data.ring_description
        };
        observables.push(this.technologyService.updateTechnologyRing(technologyUpdateDto))
      }
    }

    if (observables.length > 0) {
      forkJoin(observables).pipe(
        tap(() => this.location.back())
      ).subscribe();
    } else {
      this.location.back();
    }

  }

  getRingFromString(ringString: string | undefined): Ring | undefined {
    const ringEntries = Object.values(Ring);
    const matchingRingEntry = ringEntries.find((value) => value === ringString);
    if (matchingRingEntry) {
      return matchingRingEntry as Ring;
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

  back() {
    this.location.back();
  }
}
