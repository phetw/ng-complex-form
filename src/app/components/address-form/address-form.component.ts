import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address.model';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressFormComponent implements OnInit {
  @Input() parentForm: FormGroup;

  /** form attributes & initial value */
  private addressForm: Address = {
    road: '',
    city: ''
  };
  private addressFormValidator: Validators[] = [null, [Validators.required]];

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.addFormControlToParentForm();
  }

  addFormControlToParentForm() {
    this.formService.addFormControlAndValidator<Address>(this.parentForm, this.addressForm, this.addressFormValidator);
  }
}
