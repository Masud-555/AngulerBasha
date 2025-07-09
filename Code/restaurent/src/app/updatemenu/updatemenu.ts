import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Menu } from '../../model/menu.model';
import { MenuService } from '../service/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatemenu',
  standalone: false,
  templateUrl: './updatemenu.html',
  styleUrl: './updatemenu.css'
})
export class Updatemenu implements OnInit {

  id: string = '';
  menu: Menu = new Menu();

  constructor(
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.loadMenuById();
  }

  loadMenuById(): void {
    this.menuService.getMenuById(this.id).subscribe({
      next: (res) => {
        this.menu = res;
        console.log(res)
        this.cdr.markForCheck();
      },

      error: (err) => console.error('Error Fetching Menu:', err)
    });

  }

  updateMenu(): void {
    this.menuService.updateMenu(this.id, this.menu).subscribe({
      next: () => this.router.navigate(['/allmenu']),
      error: (err) => console.error('Update failed:', err)


    });


  }

}
