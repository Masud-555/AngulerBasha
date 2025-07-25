import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowAllMenu } from './show-all-menu/show-all-menu';
import { Addmenu } from './addmenu/addmenu';
import { Updatemenu } from './updatemenu/updatemenu';
import { Registration } from './auth/registration/registration';
import { Userprofile } from './auth/userprofile/userprofile';
import { Login } from './auth/login/login';
import { Logout } from './auth/logout/logout';
import { Bookatable } from './auth/bookatable/bookatable';
import { Updatebook } from './auth/updatebook/updatebook';
import { Addbook } from './auth/addbook/addbook';
import { Addemp } from './employee/addemp/addemp';
import { Updateemp } from './employee/updateemp/updateemp';
import { Viewemp } from './employee/viewemp/viewemp';
import { ViewCashier } from './cashier/view-cashier/view-cashier';
import { AddCashier } from './cashier/add-cashier/add-cashier';
import { Home } from './home/home';
import { UserMenu } from './user-menu/user-menu';
import { Admin } from './auth/admin/admin';




const routes: Routes = [

 { path:'', component: Home},

  { path: 'allmenu', component: ShowAllMenu },

  { path: 'user-menu', component: UserMenu },

  { path: 'addmenu', component: Addmenu },

  { path: 'updatemenu/:id', component: Updatemenu },

  { path: 'reg', component: Registration },

  { path: '', component: Login },

  { path: 'login', component: Login },

  { path: 'userprofile', component: Userprofile },

  { path: 'adminprofile', component: Admin },

  { path: 'logout', component: Logout },

  { path: 'booktab', component: Bookatable },  

  { path: 'addbook', component: Addbook },

  { path: 'updatebook/:id', component: Updatebook },

  { path: 'addemp', component: Addemp },

  { path: 'viewemp', component: Viewemp },

  { path: 'updateemp/:id', component: Updateemp },

  // { path: 'view-cashier', component: ViewCashier },

  { path: 'add-cashier', component: AddCashier },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
