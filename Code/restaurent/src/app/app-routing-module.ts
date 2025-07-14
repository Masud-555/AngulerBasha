import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ShowAllMenu } from './show-all-menu/show-all-menu';
import { Addmenu } from './addmenu/addmenu';
import { Updatemenu } from './updatemenu/updatemenu';
import { Registration } from './auth/registration/registration';
import { Userprofile } from './auth/userprofile/userprofile';
import { Login } from './auth/login/login';
import { Logout } from './auth/logout/logout';
import { Bookatable } from './auth/bookatable/bookatable';
import { Updatebook } from './auth/updatebook/updatebook';


const routes: Routes = [

  { path: '', component: Home },

  { path: 'allmenu', component: ShowAllMenu },

  { path: 'addmenu', component: Addmenu },

  { path: 'updatemenu/:id', component: Updatemenu },

  { path: 'reg', component: Registration },

  { path: 'login', component: Login },

  { path: 'userprofile', component: Userprofile },

  { path: 'logout', component: Logout },

  { path: 'booktab', component: Bookatable },

  { path: 'updatebook/:id', component: Updatebook },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
