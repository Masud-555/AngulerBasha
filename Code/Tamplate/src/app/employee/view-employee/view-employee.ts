import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee.model';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-view-employee',
  standalone: false,
  templateUrl: './view-employee.html',
  styleUrl: './view-employee.css'
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  loading = false;
  errorMessage = '';

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  // ✅ সব employee লোড করা
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
}