import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { userStore } from 'src/app/core/store/user-store';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})

export class ReportComponent implements OnInit {
  userformGroup!: FormGroup;
  userStore : userStore;
  @ViewChild('formDirective') private formDirective!: NgForm;

  constructor(private fb: FormBuilder) {
    this.userStore = new userStore();
   }

  ngOnInit(): void {
    this.defaultForm();
  };

  defaultForm() {
    this.userformGroup = this.fb.group({
      name: ['', [Validators.required,]],
      email: ['', [Validators.required,]],
      age: ['', [Validators.required,]],
      gender: ['', [Validators.required,]],
    });
  }

  onSubmit(){
    const userForm = this.userformGroup.value;
    // console.log(userForm);
    this.userStore.addUser(userForm);
    this.clearForm();
  }

  clearForm(){
    this.formDirective.reset();
  }

}
