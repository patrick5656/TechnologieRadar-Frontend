import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Technology} from "../../../../shared/types/Technology";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ring} from "../../../../shared/types/Ring";
import {TechnologyService} from "../../../../shared/services/technology.service";

interface FormValues {
  ring: string,
  ring_description: string
}

@Component({
  selector: 'publish-modal',
  templateUrl: './publish-modal.component.html',
  styleUrl: './publish-modal.component.css'
})
export class PublishModalComponent implements OnInit{
  @Input({ required: true })
  public technology!: Technology;
  @Output()
  technologyChange = new EventEmitter<Technology | null>();

  registerForm!: FormGroup;
  submitted = false;

  public ringValues = Object.values(Ring);

  constructor(
    private formBuilder: FormBuilder,
    private technologyService: TechnologyService,
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      ring: [this.technology.ring, Validators.required],
      ring_description: [this.technology.ring_description, [Validators.required]],
    });
  }

  onSubmit(data: FormValues) {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }


    this.technology.ring = this.getRingFromString(data.ring);
    this.technology.ring_description = data.ring_description;
    this.technology.published = true;
    this.technologyService.updateTechnology(this.technology);
    this.returnFromPublishModal();
  }

  returnFromPublishModal(): void {
    this.technologyChange.emit(null);
  }


  getRingFromString(ringString: string): Ring | undefined {
    const ringEntries = Object.values(Ring);
    const matchingRingEntry = ringEntries.find((value) => value === ringString);

    if (matchingRingEntry) {
      return matchingRingEntry[1] as Ring;
    }

    return undefined;
  }

}
