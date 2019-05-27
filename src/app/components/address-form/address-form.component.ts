import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormComponent implements OnInit {
  @Input() parentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addFormControlToParentForm();
  }

  addFormControlToParentForm() {
    this.parentForm.addControl('road', this.fb.control(''));
    this.parentForm.addControl('city', this.fb.control('', Validators.required));
  }
}
