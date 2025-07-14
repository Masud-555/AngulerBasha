import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BookTable } from '../../../model/booking.model';
import { BookService } from '../../service/book-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  standalone: false,
  templateUrl: './updatebook.html',
  styleUrl: './updatebook.css'
})
export class Updatebook implements OnInit {

  id: string = '';
  book: BookTable = new BookTable();

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadBookById();
  }

  loadBookById(): void {
    this.bookService.getBookById(this.id).subscribe({
      next: (res) => {
        this.book = res;
        console.log(res)
        this.cdr.markForCheck();
      },

      error: (err) => console.error('Error Fetching Menu:', err)
    });

  }

  updateBook(): void {
    this.bookService.updateBook(this.id, this.book).subscribe({
      next: () => this.router.navigate(['/booktab']),
      error: (err) => console.error('Update failed:', err)


    });


  }

}
