import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { UserService } from '../../service/user-service';

@Component({
  selector: 'app-userprofile',
  standalone: false,
  templateUrl: './userprofile.html',
  styleUrl: './userprofile.css'
})
export class Userprofile implements OnInit {

  user: User | null = null;
  private subscription: Subscription = new Subscription();


  constructor(
    private authService: AuthService, // ✅ fixed spelling
    private router: Router,
    private userService: UserService,

  ) { }


  ngOnInit(): void {


  }

}
