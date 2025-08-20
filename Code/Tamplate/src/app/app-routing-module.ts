import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Addstudent } from './student/addstudent/addstudent';
import { AlluserComponent } from './user/alluser.component/alluser.component';
import { AddjobseekerComponent } from './jobseeker/addjobseeker.component/addjobseeker.component';
import { JobseekerProfileComponent } from './jobseeker/jobseeker-profile.component/jobseeker-profile.component';
import { LoginComponent } from './auth/login.component/login.component';
import { AddcustomerComponent } from './customer/addcustomer.component/addcustomer.component';

const routes: Routes = [
  { path: '', component: Addstudent },
  { path: 'allUser', component: AlluserComponent },
  { path: 'addJobSeeker', component: AddjobseekerComponent },
  { path: 'jobsekpro', component: JobseekerProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addcustomer', component: AddcustomerComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
