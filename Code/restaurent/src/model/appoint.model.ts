
interface Appointment {
    id?: string;               // JSON Server generates  
    bookingId: string;
    scheduleSlotId: string;    // link to slot
    guestName: string;
    guestContact: string;
    reason: string;
}