import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Sidebar } from './layout/sidebar/sidebar';
import { Navbar } from './layout/navbar/navbar';
import { Footer } from './layout/footer/footer';
import { AlluserComponent } from './user/alluser.component/alluser.component';
import { Addstudent } from './student/addstudent/addstudent';
import { AddjobseekerComponent } from './jobseeker/addjobseeker.component/addjobseeker.component';
import { JobseekerProfileComponent } from './jobseeker/jobseeker-profile.component/jobseeker-profile.component';
import { LoginComponent } from './auth/login.component/login.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { AuthInterceptor } from './service/authInterceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    Sidebar,
    Navbar,
    Footer,
    AlluserComponent,
    Addstudent,
    AddjobseekerComponent,
    JobseekerProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
     provideHttpClient(
      withFetch()
    ),
     { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [App]
})
export class AppModule { }
