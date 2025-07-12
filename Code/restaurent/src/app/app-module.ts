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
