import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { UserModel } from '../../model/user.model';
import { AuthResponse } from '../../model/authResponse.model';
import { BehaviorSubject, catchError, map, Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = "http://localhost:3000/user";

  private currentUserSubject: BehaviorSubject<UserModel | null>;
  public currentUser$: Observable<UserModel | null>;

  constructor(

    private http: HttpClient,
    @Inject(PLATFORM_ID) private PlatformId: Object

  ) {

    const storedUser = this.isBrowser() ? JSON.parse(localStorage.getItem('currentUser') || 'null') : null;
    this.currentUserSubject = new BehaviorSubject<UserModel | null>(storedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();

  }

  private isBrowser(): boolean {
    return isPlatformBrowser(this.PlatformId);

  }



  registration(user: UserModel): Observable<AuthResponse> {
    return this.http.post<UserModel>(this.baseUrl, user).pipe(
      map((newUser: UserModel) => {

        // create token by username and password 
        const token = btoa(`${newUser.email}${newUser.password}`);
        return { token, user: newUser } as AuthResponse;
      }),
      catchError(error => {
        console.error('Registration error:', error);
        throw error;
      })
    );
  }

  login(credentials: { email: string; password: string }): Observable<AuthResponse> {
    let params = new HttpParams().append('email', credentials.email);

    return this.http.get<UserModel[]>(`${this.baseUrl}`, { params }).pipe(
      map(users => {
        if (users.length > 0) {
          const user = users[0];
          if (user.password === credentials.password) {
            const token = btoa(`${user.email}:${user.password}`);
            this.storeToken(token);
            this.setCurrentUser(user);
            return { token, user } as AuthResponse;
          } else {
            throw new Error('Invalid password');
          }
        } else {
          throw new Error('User not found');
        }
      }),
      catchError(error => {
        console.error('Login error:', error);
        throw error;
      })
    );
  }

  storeToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem('token', token);
    }
  }

  private setCurrentUser(user: UserModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.currentUserSubject.next(user);
  }

  // start logout 
  logout(): void {
    this.clearCurrentUser();
    if (this.isBrowser()) {
      localStorage.removeItem('token');
    }

  }

  private clearCurrentUser(): void {
    if (this.isBrowser()) {
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  removeUserDetails(): void {
    if (this.isBrowser()) {
      localStorage.clear();
    }
  }
  // log out shesh/end


  getUserRole(): any {
    return this.currentUserValue?.role;
  }

  public get currentUserValue(): UserModel | null {
    return this.currentUserSubject.value;
  }

  getToken(): string | null {
    return this.isBrowser() ? localStorage.getItem('token') : null;
  }


  isAuthenticated(): boolean {
    return !!this.getToken();
  }


  storeUserProfile(user: UserModel): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  getUserProfileFromStorage(): UserModel | null {
    if (this.isBrowser()) {
      const userProfile = localStorage.getItem('currentUser');
      console.log('User Profile is: ', userProfile);
      return userProfile ? JSON.parse(userProfile) : null;
    }
    return null;
  }
  getAdminProfileFromStorage(): UserModel | null {
    if (this.isBrowser()) {
      const adminProfile = localStorage.getItem('currentUser');
      console.log('User Profile is: ', adminProfile);
      return adminProfile ? JSON.parse(adminProfile) : null;
    }
    return null;
  }


  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  isUser(): boolean {
    const role = this.getUserRole();
    return role === 'user';
  }


}
