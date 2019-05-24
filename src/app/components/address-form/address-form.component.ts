import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  @Input() parentForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.addFormControlToParentForm();
  }

  addFormControlToParentForm() {
    this.parentForm.addControl('road', this.fb.control(''));
    this.parentForm.addControl('city', this.fb.control(''));
  }
}
