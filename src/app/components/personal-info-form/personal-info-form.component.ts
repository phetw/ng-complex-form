import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css']
})
export class PersonalInfoFormComponent implements OnInit {
  @Input() parentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addFormControlToParentForm();
  }

  addFormControlToParentForm() {
    this.parentForm.addControl('firstName', this.fb.control(''));
    this.parentForm.addControl('lastName', this.fb.control(''));
    this.parentForm.addControl('age', this.fb.control(''));
  }
}
