import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonFormComponent implements OnInit {
  @Input() no: string;
  @Input() personFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addFormControlToParentForm();
  }

  addFormControlToParentForm() {
    this.personFormGroup.addControl('personalInfo', this.fb.group({}));
    this.personFormGroup.addControl('address', this.fb.group({}));
  }
}
