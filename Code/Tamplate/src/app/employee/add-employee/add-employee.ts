import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee implements OnInit{

  employees: Employee[] = [];
  loading = false;
  errorMessage = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  // ✅ Get all employees
  getEmployees(): void {
    this.loading = true;
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load employees!';
        this.loading = false;
        console.error(err);
      }
    });
  }

  // ✅ Delete employee
  deleteEmployee(id?: number): void {
    if (!id) return;

    if (confirm('Are you sure you want to delete this employee?')) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          this.employees = this.employees.filter(emp => emp.Id !== id);
        },
        error: (err) => {
          console.error(err);
          alert('Failed to delete employee!');
        }
      });
    }
  }

  // ✅ Navigate to Add Form
  goToAddEmployee(): void {
    this.router.navigate(['/employee/add']);
  }

  // ✅ Navigate to Edit Form
  goToEditEmployee(id?: number): void {
    if (id) {
      this.router.navigate(['/employee/edit', id]);
    }
  }

}
