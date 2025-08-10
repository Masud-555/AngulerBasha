import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentService } from '../../service/student-service';
import { StudentModule } from '../../model/student.model';

@Component({
  selector: 'app-addstudent',
  standalone: false,
  templateUrl: './addstudent.html',
  styleUrl: './addstudent.css'
})
export class Addstudent {


  stuForm!: FormGroup

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder
  ) {


    this.stuForm = this.formBuilder.group({
      name: [''],
      email: [''],
      age: ['']

    });

  }


  onSubmit() {
    const student: StudentModule = { ...this.stuForm.value }

    this.studentService.saveStudent(student).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (err) => {

        console.log(err);
      }


    });


  }

}
