import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-all-menu',
  standalone: false,
  templateUrl: './show-all-menu.html',
  styleUrl: './show-all-menu.css'
})
export class ShowAllMenu implements OnInit {


  constructor(
    private menuService: MenuService,
    private router: Router,
    private cdr: ChangeDetectorRef,

  ) { }
  menus: any;


  ngOnInit(): void {
    this.loadAllItems();
  }

  loadAllItems() {

    this.menus = this.menuService.getAllMenu();

  }

  deleteMenu(id: string): void {
    this.menuService.deleteMenu(id).subscribe({
      next: () => {

        console.log('Menu deleted');
        this.loadAllItems();
        this.cdr.markForCheck();

      },

      error: (err) => {

        console.log('Error deleting Menu:', err);
      }

    });

  }

  getMenuById(id: string): void {
    this.menuService.getMenuById(id).subscribe({
      next: (res) => {
        console.log(res)
        console.log('Data get Successfull');
        this.router.navigate(['/updatemenu', id])

      },

      error: (err) => {

        console.log(err);
      }

    });


  }


}
