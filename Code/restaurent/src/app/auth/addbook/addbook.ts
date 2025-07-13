import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book-service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookTable } from '../../../model/booking.model';


@Component({
  selector: 'app-addbook',
  standalone: false,
  templateUrl: './addbook.html',
  styleUrl: './addbook.css'
})
export class Addbook implements OnInit {


  formGroup!: FormGroup;

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }


  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

      name: [''],
      email: [''],
      phone: [''],
      date: [''],
      time: [''],
      guest: [''],
      message: [''],

    });

  }


  addBook(): void {

    const book: BookTable = { ...this.formGroup.value };

    this.bookService.saveBook(book).subscribe({

      next: (res) => {


        console.log("Booking Saved ", res);
        this.formGroup.reset();
        this.router.navigate(['/booktab']);


      },

      error: (error) => {

        console.log(error);

      }

    });

  }

}
