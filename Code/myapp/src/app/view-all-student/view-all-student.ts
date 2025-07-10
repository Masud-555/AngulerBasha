import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentService } from '../service/student.service';
import { Route, Router } from '@angular/router';
import { LocationService } from '../service/location.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-view-all-student',
  standalone: false,
  templateUrl: './view-all-student.html',
  styleUrl: './view-all-student.css'
})
export class ViewAllStudent implements OnInit {

  students: Student[] = [];
  locations: Location[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private locationService: LocationService,

  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    forkJoin({
      locations: this.locationService.getAllLocation(),
      students: this.studentService.getAllStudent()
    }).subscribe({

      next: ({ locations, students }) => {
        this.locations = locations;
        this.students = students;
        this.cdr.markForCheck();
      },
      error: err => {
        console.log(err);
      }
    });


  }

  deleteStudent(id: string): void {

    this.studentService.deleteStudent(id).subscribe({
      next: (res) => {
        console.log(res);
        this.loadData();
        this.cdr.markForCheck();
      },

      error: (err) => {

        console.log('Error deleting student', err);

      }

    });

  }

  getStudentById(id: string): void {

    this.studentService.getStudentById(id).subscribe({

      next: (res) => {
        console.log(res);
        console.log('Data get Successfull');
        this.router.navigate(['/updatestudent', id]);

      },

      error: (err) => {

        console.log(err);

      }

    });


  }



}
