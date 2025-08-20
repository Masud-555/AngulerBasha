import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-addcustomer.component',
  standalone: false,
  templateUrl: './addcustomer.component.html',
  styleUrl: './addcustomer.component.css'
})
export class AddcustomerComponent {

   userForm: FormGroup;
  customerForm: FormGroup;
  photoFile!: File;
  message: string = '';

  constructor(private formbuilder: FormBuilder, private customerService: CustomerService) {
    this.userForm = this.formbuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.customerForm = this.formbuilder.group({
      gender: ['', Validators.required],
      address: ['', Validators.required],
      dateOfBirth: ['', Validators.required]
    });
  }

  onPhotoSelected(event: any): void {
    if (event.target.files.length > 0) {
      this.photoFile = event.target.files[0];
      console.log('Selected file:', this.photoFile);
    }
  }

  onSubmit(): void {
    if (!this.photoFile) {
      this.message = 'Please upload a photo.';
      return;
    }
    if (this.userForm.invalid || this.customerForm.invalid) {
      this.message = 'Please fill out all required fields.';
      return;
    }

    const user = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      password: this.userForm.value.password,
      role: 'CUSTOMER' // adjust if necessary
    };

    const customer = {
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      phone: this.userForm.value.phone,
      gender: this.customerForm.value.gender,
      address: this.customerForm.value.address,
      dateOfBirth: this.customerForm.value.dateOfBirth
    };

    this.customerService.registerJobSeeker(user, customer, this.photoFile).subscribe({
      next: res => {
        this.message = res.Message || 'Registration successful!';
        this.userForm.reset();
        this.customerForm.reset();
        this.photoFile = undefined!;
      },
      error: err => {
        this.message = 'Registration failed: ' + (err.error?.Message || err.message);
      }
    });
  }


}
