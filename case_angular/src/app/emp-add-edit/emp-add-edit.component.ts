import { Component } from '@angular/core';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {
  numbers: number[] = Array.from({ length: 100 }, (_, i) => i + 1);
}
