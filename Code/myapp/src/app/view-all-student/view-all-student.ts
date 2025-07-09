import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../../model/student.model';
import { StudentService } from '../service/student.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-all-student',
  standalone: false,
  templateUrl: './view-all-student.html',
  styleUrl: './view-all-student.css'
})
export class ViewAllStudent implements OnInit {
  students: any

  constructor(
    private studentService: StudentService,
    private router: Router,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.loadAllStudent();
  }

  loadAllStudent() {

    this.students = this.studentService.getAllStudent();

  }

  deleteStudent(id: string): void {

    this.studentService.deleteStudent(id).subscribe({
      next: (res) => {
        console.log(res);
        this.loadAllStudent();
        this.cdr.markForCheck();
      },

      error: (err) => {

        console.log('Error deleting student', err);

      }

    });

  }

getStudentById(id: string):void{

this.studentService.getStudentById(id).subscribe({

next : (res) =>{
  console.log(res);
  console.log('Data get Successfull');
  this.router.navigate(['/updatestudent' ,id]);

},

error: (err) =>{

console.log(err);

}

});
  

}



}
