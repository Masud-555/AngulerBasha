import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from '../../../model/emp.model';

@Component({
  selector: 'app-addemp',
  standalone: false,
  templateUrl: './addemp.html',
  styleUrl: './addemp.css'
})
export class Addemp implements OnInit {

  formGroup !: FormGroup;


  constructor(
    private empService: EmployeeService,
    private formBuilder: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef,

  ) { }


  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

      photo: [''],
      name: [''],
      salary: [''],
      email: [''],
      gender: [''],
      location: [''],
      nid: [''],
      phone: ['']

    });
  }


  addEmp(): void {

    const emp: Employee = { ...this.formGroup.value };

    this.empService.saveEmp(emp).subscribe({

      next: (res) => {



        console.log("Employee Saved ", res);
        this.formGroup.reset();
        this.router.navigate(['/allmenu']);


      },

      error: (error) => {

        console.log(error);

      }

    });

  }


}
