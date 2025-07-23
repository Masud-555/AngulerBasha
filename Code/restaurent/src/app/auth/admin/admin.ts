import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../model/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { AdminService } from '../../service/admin-service';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit {


   user: UserModel | null = null;
  private subscription: Subscription = new Subscription();


  constructor(
    private authService: AuthService,
    private router: Router,
    private adminService: AdminService,

  ) { }


  ngOnInit(): void {
    this.loadAdminProfile();

  }

  loadAdminProfile(): void {
    const sub = this.adminService.getAdminProfile().subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          this.user = res;
        }
      },
      error: (err) => {
        console.error('Error loading user profile:', err);
      }
    });

    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  

}
