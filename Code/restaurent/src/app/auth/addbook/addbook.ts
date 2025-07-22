import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book-service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
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
  timeSlots: string[] = [];

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.generateTimeSlots();

    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      guest: ['', Validators.required],
      message: [''],
    });
  }

  // ✅ Generate 2-hour slots from 07:00 to 23:00
  generateTimeSlots(): void {
    const startHour = 7;
    const endHour = 23;

    for (let hour = startHour; hour < endHour; hour += 2) {
      const start = this.formatTime(hour);
      const end = this.formatTime(hour + 2);
      this.timeSlots.push(`${start} - ${end}`);
    }
  }

  // Format time in 12-hour AM/PM
  formatTime(hour: number): string {
    const period = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${this.pad(hour12)}:00 ${period}`;
  }

  pad(num: number): string {
    return num < 10 ? '0' + num : '' + num;
  }

  addBook(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }

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
