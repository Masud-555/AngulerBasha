import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookatable',
  standalone: false,
  templateUrl: './bookatable.html',
  styleUrl: './bookatable.css'
})
export class Bookatable implements OnInit {
  books: any;

  constructor(private bookService: BookService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) { }


  ngOnInit(): void {
    this.loadBook();
  }

  loadBook() {

    this.books = this.bookService.getBook();

  }

  deleteBook(id: string): void {
    this.bookService.deleteBook(id).subscribe({
      next: () => {

        console.log('Booking deleted');
        this.loadBook();
        this.cdr.markForCheck();

      },

      error: (err) => {

        console.log('Error deleting Menu:', err);
      }

    });

  }

  getBookById(id: string): void {
    this.bookService.getBookById(id).subscribe({
      next: (res) => {
        console.log(res)
        console.log("Data get Successfull");
        this.router.navigate(['/updatebook', id]);
      },

      error: (err) => {

        console.log(err);
      }

    });

  }

}
