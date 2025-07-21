
interface ScheduleSlot {
    id?: string;
    bookingId: string; // links to Doctor
    date: string;     // YYYY-MM-DD
    startTime: string; // HH:MM
    endTime: string;   // HH:MM
    isBooked: boolean; // true if booked
}