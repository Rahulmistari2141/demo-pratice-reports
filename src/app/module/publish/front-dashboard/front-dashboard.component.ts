import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-front-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  templateUrl: './front-dashboard.component.html',
  styleUrls: ['./front-dashboard.component.scss'],
})

export class FrontDashboardComponent {
  hide = true;
  public employeeForm: FormGroup;
  isCheckAll: boolean = false;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      tableRows: this.fb.array([], [Validators.required])
    });
    this.addRow();
  }

  createFormGroup(): FormGroup {
    return this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      status: [''],
      ischecked: [false]
    });
  }

  addRow() {
    const control = this.employeeForm.get('tableRows') as FormArray;
    control.push(this.createFormGroup());
  }

  get getFormControls() {
    const control = this.employeeForm.get('tableRows') as FormArray;
    return control;
  }

  checkAll(checkVal: boolean) {
    this.getFormControls.controls.forEach(formGroup => {
      formGroup.get('ischecked')?.setValue(checkVal);
    });
  }

  onStatusChange(event: any, index: number) {
    if (event.target.value == 'deactive') {
      const control = this.employeeForm.get('tableRows') as FormArray;
      control.controls[index].get('state')?.disable();
      control.controls[index].get('city')?.disable();
    } else {
      const control = this.employeeForm.get('tableRows') as FormArray;
      control.controls[index].get('state')?.enable();
      control.controls[index].get('city')?.enable();
    }
  }

  removeEmployee(index: number){
    const control = this.employeeForm.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  saveForm(){
    this.employeeForm.value;
  }

}
