import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  empForm!: FormGroup;

  numbers: number[] = Array.from({ length: 100 }, (_, i) => i + 1);

  constructor(private _fb: FormBuilder) {
    this.empForm = this._fb.group({
      nameItem: '',
      measure: '',
      amount: '',
      price: '',
      product: '',
      validity: '',
      fabrication: '',
    })
  }
}
