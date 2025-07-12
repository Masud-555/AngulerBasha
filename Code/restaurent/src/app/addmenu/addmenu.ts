import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Menu } from '../../model/menu.model';
import { LocationService } from '../service/location.service';

@Component({
  selector: 'app-addmenu',
  standalone: false,
  templateUrl: './addmenu.html',
  styleUrl: './addmenu.css'
})
export class Addmenu implements OnInit {

  // location er kaj 
  locations: Location[] = [];

  formGroup !: FormGroup;


  constructor(
    private menuService: MenuService,
    private formBuilder: FormBuilder,
    private router: Router,
    private locationService: LocationService,
    private cdr: ChangeDetectorRef

  ) { }


  ngOnInit(): void {

    this.formGroup = this.formBuilder.group({

      item: [''],
      category: [''],
      image: [''],
      price: [''],
      available: [''],

    });

  }



  addMenu(): void {

    const menu: Menu = { ...this.formGroup.value };

    this.menuService.saveMenu(menu).subscribe({

      next: (res) => {



        console.log("Menu Saved ", res);
        this.formGroup.reset();
        this.router.navigate(['/allmenu']);


      },

      error: (error) => {

        console.log(error);

      }

    });

  }

}
