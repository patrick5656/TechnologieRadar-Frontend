import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Technology} from "../../../../shared/types/Technology";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Ring} from "../../../../shared/types/Ring";

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
    private formBuilder: FormBuilder
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

    console.log("Submit: ", data);
  }

  returnFromPublishModal(): void {
    this.technologyChange.emit(null);
  }

}
