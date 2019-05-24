import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Contract } from './models/contract.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contractForm: FormGroup;
  contractArray: Contract[];

  demoFormValues: any;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initialiseArray();
    this.createContractForm();

    this.onContractFormChanges();
  }

  initialiseArray() {
    this.contractArray = [];
  }

  createContractForm() {
    this.contractForm = this.fb.group({
      personArray: this.fb.array([])
    });
  }

  onContractFormChanges() {
    this.contractForm.valueChanges.subscribe(value => {
      this.demoFormValues = value;
    });
  }

  addPersonForm(person) {
    this.contractArray.push(person);
    this.personArray.push(this.fb.group({}));
  }

  get personArray() {
    return this.contractForm.get('personArray') as FormArray;
  }
}
