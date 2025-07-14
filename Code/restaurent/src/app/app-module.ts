import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { ShowAllMenu } from './show-all-menu/show-all-menu';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Addmenu } from './addmenu/addmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Updatemenu } from './updatemenu/updatemenu';
import { Registration } from './auth/registration/registration';
import { Login } from './auth/login/login';
import { Userprofile } from './auth/userprofile/userprofile';
import { Logout } from './auth/logout/logout';
import { Admin } from './auth/admin/admin';
import { Bookatable } from './auth/bookatable/bookatable';
import { Addbook } from './auth/addbook/addbook';
import { Updatebook } from './auth/updatebook/updatebook';

@NgModule({
  declarations: [
    App,
    Home,
    ShowAllMenu,
    Addmenu,
    Updatemenu,
    Registration,
    Login,
    Userprofile,
    Logout,
    Admin,
    Bookatable,
    Addbook,
    Updatebook,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),

     provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
