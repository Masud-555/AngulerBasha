import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewemp',
  standalone: false,
  templateUrl: './viewemp.html',
  styleUrl: './viewemp.css'
})
export class Viewemp implements OnInit {

  emlpoyees: any;

  constructor(
    private empService: EmployeeService,
    private router: Router,
    private cdr: ChangeDetectorRef,

  ) { }


  ngOnInit(): void {
    this.loadEmp();

  }

  loadEmp() {

    this.emlpoyees = this.empService.getEmp();

  }

  deleteEmp(id: string): void {
    this.empService.deleteEmp(id).subscribe({
      next: () => {

        console.log('Employee deleted');
        this.loadEmp();
        this.cdr.markForCheck();

      },

      error: (err) => {

        console.log('Error deleting Employee:', err);
      }

    });

  }

  getEmpById(id: string): void {
    this.empService.getEmpById(id).subscribe({
      next: (res) => {
        console.log(res)
        console.log("Data get Successfull");
        this.router.navigate(['/updateemp', id]);
      },

      error: (err) => {

        console.log(err);
      }

    });

  }

}
