import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInfoFormComponent implements OnInit {
  @Input() parentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addFormControlToParentForm();
  }

  addFormControlToParentForm() {
    this.parentForm.addControl('firstName', this.fb.control('', Validators.required));
    this.parentForm.addControl('lastName', this.fb.control('', Validators.required));
    this.parentForm.addControl('age', this.fb.control('', Validators.required));
  }
}
