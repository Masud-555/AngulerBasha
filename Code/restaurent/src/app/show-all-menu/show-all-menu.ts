import { Component, OnInit } from '@angular/core';
import { MenuService } from '../service/menu.service';

@Component({
  selector: 'app-show-all-menu',
  standalone: false,
  templateUrl: './show-all-menu.html',
  styleUrl: './show-all-menu.css'
})
export class ShowAllMenu implements OnInit{



  constructor(private menuService: MenuService){}
  menus: any;

  ngOnInit(): void {
    this.loadAllItems();
  }

  loadAllItems(){

    this.menus = this.menuService.getAllMenu();

  }

}
