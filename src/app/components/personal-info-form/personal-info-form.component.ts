import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { PersonalInfo } from 'src/app/models/personal-info.model';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-personal-info-form',
  templateUrl: './personal-info-form.component.html',
  styleUrls: ['./personal-info-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInfoFormComponent implements OnInit {
  @Input() parentForm: FormGroup;

  /** form attributes & initial value */
  private personalInfoForm: PersonalInfo = {
    firstName: '',
    lastName: '',
    age: null
  };
  private personalInfoFormValidator: Validators[] = [Validators.required, Validators.required, Validators.required];

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.addFormControlToParentForm();
  }

  addFormControlToParentForm() {
    this.formService.addFormControlAndValidator<PersonalInfo>(this.parentForm, this.personalInfoForm, this.personalInfoFormValidator);
  }
}
