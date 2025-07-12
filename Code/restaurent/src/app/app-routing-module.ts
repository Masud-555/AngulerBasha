import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ShowAllMenu } from './show-all-menu/show-all-menu';
import { Addmenu } from './addmenu/addmenu';
import { Updatemenu } from './updatemenu/updatemenu';
import { Registration } from './auth/registration/registration';
import { Userprofile } from './auth/userprofile/userprofile';
import { Login } from './auth/login/login';


const routes: Routes = [

  { path: '', component: Home },

  { path: 'allmenu', component: ShowAllMenu },

  { path: 'addmenu', component: Addmenu },

  { path: 'updatemenu/:id', component: Updatemenu },

  { path: 'reg', component: Registration },

  { path: 'userprofile', component: Userprofile },

  { path: 'login', component: Login },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
