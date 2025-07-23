import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../service/menu.service';
import { Menu } from '../../model/menu.model';

@Component({
  selector: 'app-user-menu',
  standalone: false,
  templateUrl: './user-menu.html',
  styleUrl: './user-menu.css'
})
export class UserMenu {


   menus: any;
  cart: Menu[] = [];

  constructor(
    private menuService: MenuService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadAllItems();
  }

  loadAllItems() {
    this.menus = this.menuService.getAllMenu(); // Assuming it returns Observable<Menu[]>
  }

  addToCart(item: Menu): void {
    const existing = this.cart.find(c => c.id === item.id);
    if (!existing) {
      this.cart.push(item);
    }
  }

  removeFromCart(itemId: number): void {
    this.cart = this.cart.filter(item => item.id !== itemId);
  }

  get totalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  finalBook(): void {
  console.log("Booking Finalized:", this.cart);

  // You can later replace this with an API call or route to order page
  alert('Booking confirmed! Total: ' + this.totalPrice.toFixed(2));

  // Optionally clear cart
  this.cart = [];
}



}
