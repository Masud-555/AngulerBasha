import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../service/book-service';
import { ScheduleService } from '../../service/schedule-service';
import { AppoinmentService } from '../../service/appoinment-service';
import { BookTable } from '../../../model/booking.model';

@Component({
  selector: 'app-add-appoinment',
  standalone: false,
  templateUrl: './add-appoinment.html',
  styleUrl: './add-appoinment.css'
})
export class AddAppoinment {

  appointmentForm: FormGroup;
  doctors: BookTable[] = [];     // ✅ should be an array!
  slots: ScheduleSlot[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private slotService: ScheduleService,
    private appointmentService: AppoinmentService
  ) {
    this.appointmentForm = this.formBuilder.group({
      departmentId: ['', Validators.required],
      doctorId: ['', Validators.required],
      scheduleSlotId: ['', Validators.required],
      patientName: ['', Validators.required],
      patientContact: ['', Validators.required],
      reason: ['']
    });
  }

  ngOnInit(): void {
    this.loadAppoinment();
  }

 

  loadAppoinment(): void {
    const bookingId = this.appointmentForm.value.bookingId;
    this.bookService.getBookById(bookingId).subscribe({
      next: (data) => this.doctors = data,   // ✅ must update the array
      error: (err) => console.error(err)
    });
  }

  loadSlots(): void {
    const bookingIdId = this.appointmentForm.value.doctorId;
    this.slotService.getAvailableSlots(bookingIdId).subscribe({   // ✅ only available slots
      next: (data) => this.slots = data,
      error: (err) => console.error(err)
    });
  }

  onSubmit(): void {
    if (this.appointmentForm.invalid) {
      alert('Fill all fields.');
      return;
    }

    const appt: Appointment = {      
      bookingId: this.appointmentForm.value.doctorId,
      scheduleSlotId: this.appointmentForm.value.scheduleSlotId,
      guestName: this.appointmentForm.value.patientName,
      guestContact: this.appointmentForm.value.patientContact,
      reason: this.appointmentForm.value.reason
    };

    this.appointmentService.create(appt).subscribe({
      next: () => {
        // Mark slot as booked!
        const selectedSlot = this.slots.find(s => s.id === appt.scheduleSlotId);
        if (selectedSlot) {
          selectedSlot.isBooked = true;
          this.slotService.updateSlot(selectedSlot).subscribe();
        }
        alert('Appointment booked successfully!');
        this.appointmentForm.reset();
        this.slots = [];
        this.doctors = [];
      },
      error: (err) => console.error(err)
    });
  }

}
