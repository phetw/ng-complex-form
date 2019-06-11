import { Injectable } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class FormService {
  constructor(private fb: FormBuilder) {}

  addFormControlAndValidator<T>(parentForm: FormGroup, formInterface: T, validator?: Validators[]): void {
    Object.entries(formInterface).forEach(([key, value], index) => {
      parentForm.addControl(key, this.fb.control(value, validator ? validator[index] : null));
    });
  }
}
