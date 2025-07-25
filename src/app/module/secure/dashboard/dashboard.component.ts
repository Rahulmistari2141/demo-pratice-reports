import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MasterService } from 'src/app/core/service/master.service';
// import { state } from '@angular/animations';
// import { HttpClient } from '@angular/common/http';
// import { ServiceService } from 'src/app/core/service/service.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
  userformGroup!: FormGroup;
  expression: boolean = true;
  storedUsersData: any[] = [];
  storedForm = new Array();
  stateArray = new Array();
  districtArray = new Array();
  villageArray = new Array();
  userForm = new Array();
  editMode: boolean = false;
  editIndex: number | null = null;

  constructor(
    private fb: FormBuilder,
    private master: MasterService,
  ) { }

  ngOnInit(): void {
    this.defaultForm();
    this.storedUsers();
    this.loadFromLocalStorage();
    this.districtArray = this.master.getAllDistricts();
    this.stateArray = this.master.getAllStates();
    this.userformGroup.get('state')?.valueChanges.subscribe((state: any) => {
      this.master.getAllStates();
    });

    const local = localStorage.getItem('userForm');
    if (local) {
      this.storedForm = JSON.parse(local);
      this.storedUsersData = [...this.storedForm];
    }
  }

  defaultForm() {
    this.userformGroup = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z ]*$')]],
      emailAddress: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._]+@([a-z]+[.])+[a-z]{2,5}$')]],
      moblieNo: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      gender: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      village: ['', Validators.required],
      // taluka: ['', Validators.required,],
      // districtID : ['', Validators.required,],
      pinCode: ['', [Validators.required, Validators.pattern('^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$')]],
    })
  }

  loadFromLocalStorage() {
    const localData = localStorage.getItem('userForm');
    this.storedUsersData = localData ? JSON.parse(localData) : [];
  }

  onSubmit() {
    // debugger;
    if (this.userformGroup.valid) {
      console.log(this.userformGroup.value);
      const userForm = this.userformGroup.value;
      const local = localStorage.getItem('userForm');
      this.storedForm = local ? JSON.parse(local) : [];
      let obj = {
        fullName: userForm.fullName,
        emailAddress: userForm.emailAddress,
        moblieNo: userForm.moblieNo,
        gender: userForm.gender,
        stateID: userForm.state?.id,
        stateName: userForm.state?.name,
        districtID: userForm.district?.id,
        districtName: userForm.district?.name
      };

      console.log(obj);

      if (this.editMode && this.editIndex !== null) {
        this.storedForm[this.editIndex] = obj;
        this.editMode = false;
        this.editIndex = null;
      } else {
        this.storedForm.push(obj);
      }
      // this.storedForm.push(obj);
      localStorage.setItem('userForm', JSON.stringify(this.storedForm));
      // this.storedUsersData = [...this.storedForm];
      this.userformGroup.reset();
      this.storedUsers();
    } else {
      this.userformGroup.markAllAsTouched();
      return;
    }
  }

  updateUser(index: number) {
    const userForm = this.storedUsersData[index];
    console.log(userForm);
    let obj = {
        fullName: userForm.fullName,
        emailAddress: userForm.emailAddress,
        moblieNo: userForm.moblieNo,
        gender: userForm.gender,
        state: userForm.stateID,
        stateName: userForm?.stateName,
        district: userForm.districtID,
        districtName: userForm.districtName,
      };

    console.log(obj);
    this.userformGroup.patchValue(obj);
    this.editMode = true;
    this.editIndex = index;
  }

  storedUsers() {
    // console.log(JSON.parse(localStorage.getItem('userForm') || '[]'));
    this.storedUsersData = JSON.parse(localStorage.getItem('userForm') || '[]');
  }

  delete(index: number) {
    this.storedUsersData.splice(index, 1);
    localStorage.setItem('userForm', JSON.stringify(this.storedUsersData));
  }

}

