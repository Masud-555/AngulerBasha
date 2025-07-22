import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleService } from '../../service/schedule-service';
import { BookService } from '../../service/book-service';
import { BookTable } from '../../../model/booking.model';

@Component({
  selector: 'app-add-schedule',
  standalone: false,
  templateUrl: './add-schedule.html',
  styleUrl: './add-schedule.css'
})
export class AddSchedule {

  slotForm: FormGroup;
  bookings: BookTable[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private slotService: ScheduleService,
    private bookService: BookService
  ) {
    this.slotForm = this.formBuilder.group({
      bookingId: ['', Validators.required],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.slotForm.invalid) {
      alert('Please fill all fields.');
      return;
    }

    const newSlot: ScheduleSlot = {
      bookingId: this.slotForm.value.bookingId,
      date: this.slotForm.value.date,
      startTime: this.slotForm.value.startTime,
      endTime: this.slotForm.value.endTime,
      isBooked: false
    };

    this.slotService.createSlot(newSlot).subscribe({
      next: () => {
        alert('Schedule slot added!');
        this.slotForm.reset();
      },
      error: (err) => console.error(err)
    });
  }
}
