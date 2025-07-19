import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Employee } from '../../../model/emp.model';
import { EmployeeService } from '../../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateemp',
  standalone: false,
  templateUrl: './updateemp.html',
  styleUrl: './updateemp.css'
})
export class Updateemp implements OnInit {

  id: string = '';
  emp: Employee = new Employee();

  constructor(
    private empService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef

  ) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadEmpById();
  }


  loadEmpById(): void {
    this.empService.getEmpById(this.id).subscribe({
      next: (res) => {
        this.emp = res;
        console.log(res)
        this.cdr.markForCheck();
      },

      error: (err) => console.error('Error Fetching Employee:', err)
    });

  }

  updateEmp(): void {
    this.empService.updateEmp(this.id, this.emp).subscribe({
      next: () => this.router.navigate(['/allemp']),
      error: (err) => console.error('Update failed:', err)


    });


  }

}
